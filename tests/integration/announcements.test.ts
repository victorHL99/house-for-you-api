import supertest from 'supertest';
import app from '../../src/app';
import client from '../../src/config/database';

const agent = supertest(app);

// truncate the database before each test
beforeEach(async () => {
  await client.$executeRaw`TRUNCATE TABLE announcements`;
});

afterAll(async () => {
  await client.$disconnect();
});
