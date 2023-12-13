import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", User);

export default UserModel;
