import express from "express";
import {
  addProduct,
  allProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

//Add Product Routes
router.post("/new", addProduct);

//Get All
router.get("/all", allProduct);

//Update Routes
router.put(`/edit/:id`, updateProduct);

//Delete Routes
router.delete(`/delete/:id`, deleteProduct);

export default router;
