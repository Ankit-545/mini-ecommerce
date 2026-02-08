import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-cart">
      <img src={product.image} alt={product.name} width="100%" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
