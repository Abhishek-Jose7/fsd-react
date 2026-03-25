import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { selectCartItems, selectSubtotal } from "../store/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "../store/slices/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotal);

  return (
    <section className="cart-page" aria-label="Your cart">
      <h2 className="cart-page-title">Your Cart</h2>
      <div className="cart-page-card">
        <Cart
          cartItems={cartItems}
          total={subtotal}
          decreaseQuantity={(productId) => dispatch(decreaseQuantity(productId))}
          increaseQuantity={(productId) => dispatch(increaseQuantity(productId))}
          removeFromCart={(productId) => dispatch(removeFromCart(productId))}
          onCheckout={() => navigate("/payment")}
        />
      </div>
    </section>
  );
}

export default CartPage;
