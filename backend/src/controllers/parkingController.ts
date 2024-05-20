import { Request, Response } from 'express';
import Parking from '../models/Parking';
import User from '../models/User';
import { calculateParkingPrice } from '../services/parkingService';

export const startParking = async (req: Request, res: Response) => {
    try {
        const { email, city, area } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const parking = await Parking.create({
                userId: user.id,
                city,
                area,
                startTime: new Date(),
                price: 0
            });
            res.status(201).json(parking);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const stopParking = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const parking = await Parking.findByPk(id);
        if (parking) {
            const endTime = new Date();
            const price = await calculateParkingPrice(parking.city, parking.startTime, endTime);
            parking.endTime = endTime;
            parking.price = price;
            await parking.save();
            res.status(200).json(parking);
        } else {
            res.status(404).json({ message: 'Parking session not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
