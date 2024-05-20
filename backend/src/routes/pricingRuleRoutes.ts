import { Router } from 'express';
import { createPricingRule, getPricingRules } from '../controllers/pricingRuleController';

const router = Router();

router.post('/', createPricingRule);
router.get('/', getPricingRules);

export default router;
