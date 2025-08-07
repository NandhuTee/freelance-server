import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/:senderId/:receiverId', sendMessage);
router.get('/:senderId/:receiverId', getMessages);

export default router;
