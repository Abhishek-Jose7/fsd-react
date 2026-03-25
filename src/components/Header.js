import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { selectCartCount, selectSearchQuery } from "../store/selectors";
import { setSearchQuery } from "../store/slices/uiSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const cartCount = useSelector(selectCartCount);
  const searchQuery = useSelector(selectSearchQuery);

  const navigationItems = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Cart", to: "/cart" },
    { label: "New Arrivals", to: "/new-arrivals" },
    { label: "Electronics", to: "/electronics" },
    { label: "Home & Kitchen", to: "/home-kitchen" },
    { label: "Workspace", to: "/workspace" },
    { label: "Deals", to: "/deals" }
  ];

  const onSearchSubmit = () => {
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <header className="top-header">
      <div className="top-header-main">
        <Link className="brand-block" to="/" aria-label="Homepage">
          <h1>NORTHLINE</h1>
          <span>STORE</span>
        </Link>

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
            onChange={(event) => dispatch(setSearchQuery(event.target.value))}
            placeholder="Search electronics, home, office and more"
          />
          <button type="button" aria-label="Search products" onClick={onSearchSubmit}>
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

        <NavLink className="cart-pill" to="/cart" aria-label="Cart items">
          <strong>{cartCount}</strong>
          <span>Cart</span>
        </NavLink>
      </div>

      <div className="top-header-nav">
        {navigationItems.map((item) => (
          <NavLink
            key={`${item.label}-${item.to}`}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
