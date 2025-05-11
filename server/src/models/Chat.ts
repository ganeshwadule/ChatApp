import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  senderId: { type: mongoose.Types.ObjectId, required: true },
  recieverId: { type: mongoose.Types.ObjectId, required: true },
  content: { type: String },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
