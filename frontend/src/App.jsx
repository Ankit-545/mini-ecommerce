import { useState } from "react";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  const [page, setPage] = useState("products");

  return (
    <div>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>

      {page === "products" && <Products />}
      {page === "cart" && <Cart />}
    </div>
  );
};

export default App;
