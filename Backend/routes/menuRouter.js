import express from "express";
import multer from "multer";
import menuController from "../controllers/menuController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image");

router.post("/categories/upload", upload, menuController.addCategory);
router.get("/", menuController.getMenu);
router.put("/:id", menuController.updateCategory);
router.delete("/:categoryId", menuController.deleteCategory);

export default router;
