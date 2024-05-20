import { Router } from 'express';
import { registerUser, loginUser, getUserParkings } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:email/parkings', getUserParkings);

export default router;
