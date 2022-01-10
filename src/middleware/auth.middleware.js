import jwt from 'jsonwebtoken';

import Responses from '../helpers/Responses.js';
import { createResponse } from '../helpers/http.helper.js';

const verifyToken = async (req, res, next) => {
	const authHeader = req.headers['Authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if(token == null) return createResponse(res, 401, { message: Responses.missingToken });

	jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
		if (error) return createResponse(res, 403, error);

		req.body = user;

		next();
	});
}

export default verifyToken;
