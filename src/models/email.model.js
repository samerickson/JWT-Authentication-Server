import Joi from 'joi';

const Email = Joi.object().keys({
    email: Joi.string().email().required()
});

export default Email;
