import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

import complexityOptions from '../config/password.config.js';

const Credentials = Joi.object().keys({
	email: Joi.string().email().required(),
	password: passwordComplexity(complexityOptions).required()
});

export default Credentials;
