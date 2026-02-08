import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <h3>Your cart is empty</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
