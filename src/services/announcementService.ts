import jwt from 'jsonwebtoken';

async function decryptToken(token: string) {
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded.email;
}

async function getUserId(email: string) {
  const id = await announcementRepository.getUserByEmail(email);

  return id;
}

const announcementService = {
  decryptToken,
  getUserId,
};

export default announcementService;
