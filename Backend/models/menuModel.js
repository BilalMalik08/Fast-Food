import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  image: { type: String, required: false },
  adminCategory: { type: String, required: true },
  items: { type: String, required: true },
  description: { type: String, required: true },
});

const MenuModel = mongoose.model("Menu", menuSchema);

export default MenuModel;
