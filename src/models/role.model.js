import Joi from 'joi';

const Role = Joi.object().keys({
    role: Joi.string().valid('admin', 'tech', 'office', 'forman').required(),
});

export default Role;
