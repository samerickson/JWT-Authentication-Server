import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

import complexityOptions from '../config/password.config.js';
import Email from './email.model.js';

const Credentials = Joi.object().keys({
	password: passwordComplexity(complexityOptions).required()
}).concat(Email);

export default Credentials;
