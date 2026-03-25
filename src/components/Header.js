function Header({ cartCount, searchQuery, onSearchChange }) {
  return (
    <header className="top-header">
      <div className="top-header-main">
        <div className="brand-block" aria-label="Homepage">
          <h1>NORTHLINE</h1>
          <span>STORE</span>
        </div>

        <div className="delivery-block">
          <p>Delivering globally</p>
          <strong>Set your location</strong>
        </div>

        <div className="search-block">
          <label htmlFor="search-input" className="sr-only">
            Search products
          </label>
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search electronics, home, office and more"
          />
          <button type="button" aria-label="Search products">
            Go
          </button>
        </div>

        <div className="account-block">
          <p>Welcome back</p>
          <strong>Your Account</strong>
        </div>

        <div className="orders-block">
          <p>Track</p>
          <strong>Orders</strong>
        </div>

        <div className="cart-pill" aria-label="Cart items">
          <strong>{cartCount}</strong>
          <span>Cart</span>
        </div>
      </div>

      <div className="top-header-nav">
        <p>All Departments</p>
        <p>New Arrivals</p>
        <p>Support</p>
        <p>Electronics</p>
        <p>Home & Kitchen</p>
        <p>Workspace</p>
        <p>Audio</p>
        <p>Deals</p>
      </div>
    </header>
  );
}

export default Header;
