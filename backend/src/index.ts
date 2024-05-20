import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import parkingRoutes from './routes/parkingRoutes';
import pricingRuleRoutes from './routes/pricingRuleRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/parking', parkingRoutes);
app.use('/pricing-rules', pricingRuleRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});

export default app;
