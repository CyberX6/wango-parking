import request from 'supertest';
import app from '../index';
import sequelize from '../config/database';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('User Registration', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/users/register')
            .send({
                email: 'test@example.com',
                address: '123 Main St',
                fullName: 'John Doe',
                carPlateNumber: 'ABC123'
            });
        expect(response.status).toBe(201);
        expect(response.body.email).toBe('test@example.com');
    });
});
