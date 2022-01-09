import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

import complexityOptions from '../config/password.config.js';

const User = Joi.object({
	first_name: Joi.string().min(2).max(16).required(),
	last_name: Joi.string().min(2).max(16).required(),
	email: Joi.string().email().required(),
	role: Joi.string().valid('admin', 'tech', 'office', 'forman'),
	password: passwordComplexity(complexityOptions).required()
});

export default User;
