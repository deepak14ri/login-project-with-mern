const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById
} = require("../controllers/CategoryController.js");
const { verifyToken } = require("../middlewares/verifytoken.js");

const CategoryRouter = express.Router();

CategoryRouter.post("/", verifyToken, createCategory);
CategoryRouter.put("/:id", verifyToken, updateCategory);
CategoryRouter.delete("/:id", verifyToken, deleteCategory);
CategoryRouter.get("/", getAllCategories);
CategoryRouter.get("/:id", getCategoryById);

module.exports = CategoryRouter;
