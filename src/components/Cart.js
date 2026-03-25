function Cart({
  cartItems,
  total = 0,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  onCheckout
}) {
  const deliveryCharge = total > 999 ? 0 : 99;
  const grandTotal = total + deliveryCharge;

  return (
    <div className="cart-shell">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <span>Add products to see your order summary here.</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-header">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">Rs {item.price.toLocaleString()}</span>
                </div>

                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease quantity for ${item.name}`}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase quantity for ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove item
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span>Subtotal:</span>
              <span>Rs {total.toLocaleString()}</span>
            </div>
            <div className="cart-total">
              <span>Delivery:</span>
              <span>{deliveryCharge === 0 ? "Free" : `Rs ${deliveryCharge}`}</span>
            </div>
            <div className="cart-total final-total">
              <span>Order Total:</span>
              <span>Rs {grandTotal.toLocaleString()}</span>
            </div>

            <button type="button" className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
