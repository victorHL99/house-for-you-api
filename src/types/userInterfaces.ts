import { User } from '@prisma/client';

export type Signup = Omit<
  User,
  'id' | 'createdAt' | 'updatedAt' | 'permission_granted'
>;

export type Signin = Pick<User, 'email' | 'password'>;
