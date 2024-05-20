import { Router } from 'express';
import { startParking, stopParking } from '../controllers/parkingController';

const router = Router();

router.post('/start', startParking);
router.post('/stop', stopParking);

export default router;
