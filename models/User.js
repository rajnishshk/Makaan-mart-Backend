import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  profilePhoto: { type: String },
  password: { type: String, required: true }, // 🔥 Added
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
