import Joi from 'joi';
import { Signup } from '../types/userInterfaces';

const signupSchema = Joi.object<Signup>({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profile_image: Joi.string().required(),
});

const authSchema = {};

export default authSchema;
