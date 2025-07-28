// messageController.js
import Message from '../models/messageModel.js';

// Create a new message
export const createMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const { senderId, receiverId } = req.params;

    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      content,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};

// Get all messages between two users
export const getMessagesBetweenUsers = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId }
      ]
    }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
  }
};
