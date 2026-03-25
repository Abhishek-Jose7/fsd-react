import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import {
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

const categoryConfig = {
  "new-arrivals": {
    title: "New Arrivals",
    copy: "Fresh picks this week, selected for trending demand.",
    filter: (products) => products.slice(0, 4)
  },
  electronics: {
    title: "Electronics",
    copy: "Smart devices and everyday gadgets.",
    filter: (products) => products.filter((product) => product.category === "electronics")
  },
  "home-kitchen": {
    title: "Home & Kitchen",
    copy: "Reliable home appliances and utility products.",
    filter: (products) => products.filter((product) => product.category === "home-kitchen")
  },
  workspace: {
    title: "Workspace",
    copy: "Performance gear for focus and comfort.",
    filter: (products) => products.filter((product) => product.category === "workspace")
  },
  deals: {
    title: "Deals",
    copy: "Best discounts across all categories.",
    filter: (products) =>
      products.filter(
        (product) =>
          ((product.originalPrice - product.price) / product.originalPrice) * 100 >= 30
      )
  }
};

function CategoryPage({ categoryKey }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredProducts = useSelector(selectFilteredProducts);
  const searchQuery = useSelector(selectSearchQuery);
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotal);

  const config = categoryConfig[categoryKey] ?? categoryConfig.electronics;

  const categoryProducts = useMemo(
    () => config.filter(filteredProducts),
    [config, filteredProducts]
  );

  return (
    <>
      <section className="hero-strip" aria-label={config.title}>
        <div className="hero-grid">
          <p className="hero-title">{config.title}</p>
          <p className="hero-copy">{config.copy}</p>
        </div>
      </section>

      <div className="content-grid">
        <section className="catalog-panel" aria-label={`${config.title} products`}>
          <ProductList
            products={categoryProducts}
            addToCart={(product) => dispatch(addToCart(product))}
            totalProducts={categoryProducts.length}
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

export default CategoryPage;
