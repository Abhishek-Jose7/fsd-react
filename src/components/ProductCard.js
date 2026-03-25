function ProductCard({ product, addToCart }) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <img
          className="product-card-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-card-content">
        <p className="brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="rating">
          {product.rating} / 5 ({product.reviews.toLocaleString()} reviews)
        </p>
        <p className="badge">{product.badge}</p>

        <div className="pricing-row">
          <p className="price">Rs {product.price.toLocaleString()}</p>
          <p className="strikethrough">Rs {product.originalPrice.toLocaleString()}</p>
        </div>

        <p className="discount">Save {discountPercent}% today</p>

        <button type="button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
