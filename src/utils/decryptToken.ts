import jwt from 'jsonwebtoken';

export default async function decryptToken(token: string) {
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded.email;
}
