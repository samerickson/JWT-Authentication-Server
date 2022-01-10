import Responses from './Responses.js';

export const createResponse = (res, status, body) => {
	res.status(status).send(body);
}

export const invalidPass = (res) => {
	console.log('HERE');
	res.status(403).send({ status: 403, message: Responses.invalidCredentials });
}
