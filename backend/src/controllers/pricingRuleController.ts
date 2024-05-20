import { Request, Response } from 'express';
import PricingRule from '../models/PricingRule';

export const createPricingRule = async (req: Request, res: Response) => {
  try {
    const { city, startHour, endHour, price } = req.body;
    const rule = await PricingRule.create({ city, startHour, endHour, price });
    res.status(201).json(rule);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getPricingRules = async (req: Request, res: Response) => {
  try {
    const rules = await PricingRule.findAll();
    res.status(200).json(rules);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
