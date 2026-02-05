const express = require("express");
const router = express.Router();
const { addToCart, getCart } = require("../controllers/cartController");

// Add product to cart
router.post("/", addToCart);

// Get cart by userId
router.get("/:userId", getCart);

module.exports = router;
