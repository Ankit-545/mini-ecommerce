import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
     <div className="product-grid">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

    </div>
  );
};

export default Products;
