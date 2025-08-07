import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  gigId: { type: mongoose.Schema.Types.ObjectId, ref: "Gig", required: true },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
