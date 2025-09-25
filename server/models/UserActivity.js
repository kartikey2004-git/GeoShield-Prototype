import mongoose from "mongoose";

const UserActivitySchema = new mongoose.Schema({
  socketId: String,
  userId: String,
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.UserActivity ||
  mongoose.model("UserActivity", UserActivitySchema);


  