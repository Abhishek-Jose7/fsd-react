import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, totalProducts, searchQuery }) {
  const hasSearch = searchQuery.trim().length > 0;

  return (
    <div>
      <div className="catalog-heading-row">
        <h2>Featured Collection</h2>
        <p>{products.length} items found</p>
      </div>

      {hasSearch ? (
        <p className="search-tagline">
          Search results for <strong>"{searchQuery.trim()}"</strong>
        </p>
      ) : (
        <p className="search-tagline">
          Balanced layout with {totalProducts} curated products
        </p>
      )}

      {products.length === 0 ? (
        <div className="empty-results">
          <h3>No products found</h3>
          <p>Try using another keyword such as headphones, kitchen, or watch.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
