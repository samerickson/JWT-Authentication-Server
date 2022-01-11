import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import Credentials from '../models/Credentials.model.js';
import User from '../models/User.model.js';
import Email from '../models/email.model.js';
import AuthToken from '../models/AuthToken.model.js';

import { createResponse } from '../helpers/http.helper.js';
import Responses from '../helpers/Responses.js';
import { addRefreshToken, insertUser, getUserForLogin, removeRefreshToken } from '../helpers/db.helper.js';
import { generateAccessToken } from '../helpers/jwt.helper.js';

dotenv.config();

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

// TODO: File shoudl be one big object the "controller"

export const createUser = async (req, res, next) => {
    try {
        const user = await User.validateAsync(req.body);

        await insertUser(user.first_name, user.last_name, user.email, user.role, hashPassword(user.password));

        createResponse(res, 200, { status: 200, message: Responses.createdNewUser });

    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {

    try {
        const credentials = await Credentials.validateAsync(req.body);

        const query = await getUserForLogin(credentials.email);

        const validPassword = await bcrypt.compare(credentials.password, query[0].password);
        if(!validPassword) throw new Error(Responses.invalidCredentials);

        const authToken = await AuthToken.validateAsync({ cid: query[0].cid, role: query[0].role });
        const token = generateAccessToken(authToken, process.env.ACCESS_TOKEN_SECRET);

        const refreshToken = generateAccessToken(authToken, process.env.REFRESH_TOKEN_SECRET);

        await addRefreshToken(refreshToken, query[0].cid);

        createResponse(res, 200, { status: 200, message: Responses.loginSuccessful, token, refreshToken });
    } catch(error) {
        next(error);
    }
}

export const logoutUser = async (req, res, next) => {
    try {
        const email = await Email.validateAsync(req.body);
        const results = await removeRefreshToken(email.email);

        console.log(results);

        createResponse(res, 200, {status: 200, message: Responses.logoutSuccessful, refresh_tokens_removed: results[0].affectedRows });
    } catch(error) {
        next(error)
    }
}
