import Product from "../models/Product.Models.js";

//Add Product
export const addProduct = async (req, res) => {
  try {
    const { title, price, image, category } = req.body;
    if (!title || !price || !image || !category) {
      return res.status(400).json({ message: "All fields are rqeuired" });
    }

    const newProduct = await Product.create({
      title,
      price,
      image,
      category,
    });

    return res.status(200).json({ message: "Product Created", newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Get All Products
export const allProduct = async (req, res) => {
  try {
    const product = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Update Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updateProductData = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateProductData) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Updated", updateProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProductId = await Product.findByIdAndDelete(id);
    if (!deleteProductId) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Deleted Sucessfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
