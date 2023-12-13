import mongoose from "mongoose";

const Admin = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model("Admin", Admin);

export default AdminModel;
