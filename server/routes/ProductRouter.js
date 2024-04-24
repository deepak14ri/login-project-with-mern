const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById
} = require("../controllers/ProductController.js");
const { verifyToken } = require("../middlewares/verifytoken.js");

const ProductRouter = express.Router();

ProductRouter.post("/", verifyToken, createProduct);
ProductRouter.put("/:id", verifyToken, updateProduct);
ProductRouter.delete("/:id", verifyToken, deleteProduct);
ProductRouter.get("/", getAllProducts);
ProductRouter.get("/:id", getProductById);

module.exports = ProductRouter;
