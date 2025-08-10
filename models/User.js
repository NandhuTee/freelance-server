import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["freelancer", "client"], required: true },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError by checking if model already exists
export default mongoose.models.User || mongoose.model("User", userSchema);
