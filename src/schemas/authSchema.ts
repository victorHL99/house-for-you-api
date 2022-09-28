import Joi from 'joi';
import { Signin, Signup } from '../types/userInterfaces';

const signupSchema = Joi.object<Signup>({
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  profile_image: Joi.string().required(),
});

const signinSchema = Joi.object<Signin>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const authSchema = {
  signupSchema,
  signinSchema,
};

export default authSchema;
