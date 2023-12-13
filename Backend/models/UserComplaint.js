import mongoose from "mongoose";

const UserComplaint = new mongoose.Schema({
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
  complaint: {
    type: String,
    required: true,
  },
});

const UserComplaintModel = mongoose.model("UserComplaint", UserComplaint);

export default UserComplaintModel;
