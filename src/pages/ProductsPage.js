import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import {
  selectAllProducts,
  selectCartItems,
  selectFilteredProducts,
  selectSearchQuery,
  selectSubtotal
} from "../store/selectors";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "../store/slices/cartSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector(selectAllProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  const searchQuery = useSelector(selectSearchQuery);
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotal);

  return (
    <>
      <section className="hero-strip" aria-label="Promotions">
        <div className="hero-grid">
          <p className="hero-title">NORTHLINE STORE</p>
          <p className="hero-copy">
            Discover more options with routed pages and Redux-powered global state.
          </p>
        </div>
      </section>

      <div className="content-grid">
        <section className="catalog-panel" aria-label="Product catalog">
          <ProductList
            products={filteredProducts}
            addToCart={(product) => dispatch(addToCart(product))}
            totalProducts={allProducts.length}
            searchQuery={searchQuery}
          />
        </section>

        <aside className="cart-panel" aria-label="Shopping cart summary">
          <Cart
            cartItems={cartItems}
            total={subtotal}
            decreaseQuantity={(productId) => dispatch(decreaseQuantity(productId))}
            increaseQuantity={(productId) => dispatch(increaseQuantity(productId))}
            removeFromCart={(productId) => dispatch(removeFromCart(productId))}
            onCheckout={() => navigate("/payment")}
          />
        </aside>
      </div>
    </>
  );
}

export default ProductsPage;
