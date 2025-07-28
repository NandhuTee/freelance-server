import express from 'express';
import {
  createMessage,
  getMessagesBetweenUsers
} from '../controllers/messageController.js';



const router = express.Router();

// POST: Create message
router.post('/:senderId/:receiverId', createMessage);

// GET: Fetch all messages between two users
router.get('/:senderId/:receiverId', getMessagesBetweenUsers);

export default router;
