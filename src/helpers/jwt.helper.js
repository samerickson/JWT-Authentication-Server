import jwt from 'jsonwebtoken';

export const generateAccessToken = (user, secret) => {
    return jwt.sign(user, secret, {expiresIn: '15m'});
}
