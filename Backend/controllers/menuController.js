import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import multer from "multer";
import MenuModel from "../models/menuModel.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image");

// Use import.meta.url to get the current module's URL
const __filename = fileURLToPath(import.meta.url);
// Use dirname to get the directory name
const __dirname = dirname(__filename);

const addCategory = async (req, res) => {
  try {
    const { adminCategory, items, description } = req.body;

    if (!req.file) {
      throw new Error("Image field is missing in the request body");
    }

    const imageBuffer = req.file.buffer;
    const filename = `${Date.now()}-${adminCategory.toLowerCase()}.jpg`;
    const imagePath = path.join(__dirname, "../uploads", filename);

    fs.writeFileSync(imagePath, imageBuffer);

    const newCategory = new MenuModel({
      adminCategory,
      items,
      description,
      image: filename,
    });

    await newCategory.save();

    res.status(201).json({ message: "Category added successfully" });
  } catch (error) {
    console.error("Error adding category:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

const getMenu = async (req, res) => {
  try {
    const menu = await MenuModel.find();
    res.status(200).json(menu);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    // Handle file upload
    upload(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Error uploading file",
        });
      }

      const { adminCategory, items, description } = req.body;
      const categoryId = req.params.id;

      try {
        const updatedCategory = await MenuModel.findOneAndUpdate(
          { _id: categoryId },
          { adminCategory, items, description }
        );

        // Check if an image is included in the update
        if (req.file) {
          const imageBuffer = req.file.buffer;
          const filename = `${Date.now()}-${adminCategory.toLowerCase()}.jpg`;
          const imagePath = path.join(__dirname, "../uploads", filename);

          // Handle image update logic, e.g., writing to disk
          fs.writeFileSync(imagePath, imageBuffer);

          // Update the image field in the document
          updatedCategory.image = filename;
          await updatedCategory.save();
        }

        if (!updatedCategory) {
          return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
          message: "Category updated successfully",
          data: updatedCategory,
        });
      } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({
          error: "Internal Server Error",
          message: error.message,
        });
      }
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    const deletedCategory = await MenuModel.findOneAndDelete({
      _id: categoryId,
    });

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export default { addCategory, getMenu, updateCategory, deleteCategory };
