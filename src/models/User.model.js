import Joi from 'joi';

import Credentials from './Credentials.model.js';

const User = Credentials.keys({
	first_name: Joi.string().min(2).max(16).required(),
	last_name: Joi.string().min(2).max(16).required(),
	role: Joi.string().valid('admin', 'tech', 'office', 'forman').required(),
});

export default User;
