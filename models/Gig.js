import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  deliveryTime: Number, // in days
  category: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Gig', gigSchema);
