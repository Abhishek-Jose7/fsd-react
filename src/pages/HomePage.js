import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { addToCart } from "../store/slices/cartSlice";
import { selectAllProducts } from "../store/selectors";

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="hero-strip" aria-label="Promotions">
        <div className="hero-grid">
          <p className="hero-title">NORTHLINE STORE</p>
          <p className="hero-copy">
            Minimal design. Maximum utility. Shop premium tech and home essentials in a clean,
            monochrome storefront.
          </p>
        </div>
      </section>

      <section className="home-actions" aria-label="Quick actions">
        <Link to="/products" className="home-action-card">
          <h2>Explore Products</h2>
          <p>Browse the complete catalog with search and a persistent cart.</p>
        </Link>
        <Link to="/cart" className="home-action-card">
          <h2>Open Cart</h2>
          <p>Review your current order and adjust quantities before checkout.</p>
        </Link>
      </section>

      <section className="catalog-panel" aria-label="Featured products">
        <ProductList
          products={featuredProducts}
          addToCart={(product) => dispatch(addToCart(product))}
          totalProducts={products.length}
          searchQuery=""
        />
      </section>
    </>
  );
}

export default HomePage;
