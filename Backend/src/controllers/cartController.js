const addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  res.status(201).json({
    message: "Item added to cart successfully",
    data: {
      productId,
      quantity
    }
  });
};

module.exports = { addToCart };
