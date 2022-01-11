import Joi from 'joi';

import Credentials from './Credentials.model.js';
import Role from './role.model.js'

const Name = Credentials.keys({
    first_name: Joi.string().min(2).max(16).required(),
    last_name: Joi.string().min(2).max(16).required(),
});

const User = Name.concat(Role);

export default User;
