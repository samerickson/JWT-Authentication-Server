import Joi from 'joi';

import Role from './role.model.js';

const AuthToken = Joi.object().keys({
    cid: Joi.binary().length(16).required(),
}).concat(Role);

export default AuthToken;
