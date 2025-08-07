import Message from '../models/messageModel.js';

export const sendMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const { senderId, receiverId } = req.params;

    const message = new Message({ senderId, receiverId, content });
    const saved = await message.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to send message", error: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages", error: err.message });
  }
};
