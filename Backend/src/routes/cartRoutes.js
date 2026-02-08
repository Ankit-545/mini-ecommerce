const express = require("express");
const { addToCart } = require("../controllers/cartController");
const validateCart = require("../middleware/validateCart");

const router = express.Router();

router.post("/cart", validateCart, addToCart);

module.exports = router;
