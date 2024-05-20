import { differenceInMinutes } from 'date-fns';
import PricingRule from '../models/PricingRule';

export const calculateParkingPrice = async (city: string, start: Date, end: Date): Promise<number> => {
    const rules = await PricingRule.findAll({ where: { city } });
    if (rules.length === 0) {
        throw new Error(`Pricing rules for city ${city} not found`);
    }

    let price = 0;
    const totalMinutes = differenceInMinutes(end, start);
    const totalHours = Math.ceil(totalMinutes / 60);

    for (let i = 0; i < totalHours; i++) {
        const currentHour = new Date(start.getTime() + i * 60 * 60 * 1000).getHours();
        const rule = rules.find(r => currentHour >= r.startHour && currentHour < r.endHour);
        if (rule) {
            price += rule.price;
        } else {
            throw new Error(`No pricing rule found for hour ${currentHour} in city ${city}`);
        }
    }

    return price;
};
