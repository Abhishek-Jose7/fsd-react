import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartCount, selectSubtotal } from "../store/selectors";

function PaymentPage() {
  const subtotal = useSelector(selectSubtotal);
  const cartCount = useSelector(selectCartCount);
  const deliveryCharge = subtotal > 999 ? 0 : 99;
  const grandTotal = subtotal + deliveryCharge;

  return (
    <section className="payment-page" aria-label="Payment page">
      <h2 className="payment-title">Payment</h2>

      {cartCount === 0 ? (
        <div className="payment-empty">
          <p>Your cart is empty. Add products before checkout.</p>
          <Link to="/products" className="payment-link">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="payment-grid">
          <div className="payment-form-card">
            <h3>Card Details</h3>
            <div className="payment-form">
              <label htmlFor="card-holder">Card Holder</label>
              <input id="card-holder" type="text" placeholder="Enter card holder name" />

              <label htmlFor="card-number">Card Number</label>
              <input id="card-number" type="text" placeholder="1234 5678 9012 3456" />

              <div className="payment-row">
                <div>
                  <label htmlFor="expiry">Expiry</label>
                  <input id="expiry" type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input id="cvv" type="password" placeholder="***" />
                </div>
              </div>

              <button type="button" className="pay-btn">
                Pay Rs {grandTotal.toLocaleString()}
              </button>
            </div>
          </div>

          <aside className="payment-summary-card" aria-label="Payment summary">
            <h3>Order Summary</h3>
            <p>Items: {cartCount}</p>
            <p>Subtotal: Rs {subtotal.toLocaleString()}</p>
            <p>Delivery: {deliveryCharge === 0 ? "Free" : `Rs ${deliveryCharge}`}</p>
            <p className="payment-total">Total: Rs {grandTotal.toLocaleString()}</p>
          </aside>
        </div>
      )}
    </section>
  );
}

export default PaymentPage;
