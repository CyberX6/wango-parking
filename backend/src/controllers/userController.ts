import { Request, Response } from 'express';
import User from '../models/User';
import Parking from '../models/Parking';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, address, fullName, carPlateNumber } = req.body;
        const user = await User.create({ email, address, fullName, carPlateNumber });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, carPlateNumber } = req.body;
        const user = await User.findOne({ where: { email, carPlateNumber } });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getUserParkings = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const parkings = await Parking.findAll({ where: { userId: user.id } });
            res.status(200).json(parkings);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
