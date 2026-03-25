import { useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    brand: "EchoTune",
    price: 7999,
    originalPrice: 11999,
    rating: 4.4,
    reviews: 2013,
    badge: "Top Pick",
    image:
      "https://source.unsplash.com/900x700/?headphones,product"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    brand: "PulsePro",
    price: 4299,
    originalPrice: 6999,
    rating: 4.2,
    reviews: 1289,
    badge: "Limited Run",
    image:
      "https://source.unsplash.com/900x700/?smartwatch,product"
  },
  {
    id: 3,
    name: "1080p Security Camera",
    brand: "SafeHome",
    price: 2599,
    originalPrice: 3999,
    rating: 4.3,
    reviews: 986,
    badge: "Reliable Choice",
    image:
      "https://source.unsplash.com/900x700/?security,camera,product"
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    brand: "StrikeKey",
    price: 3499,
    originalPrice: 5299,
    rating: 4.5,
    reviews: 1742,
    badge: "Staff Choice",
    image:
      "https://source.unsplash.com/900x700/?mechanical,keyboard,product"
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    brand: "BoomBeat",
    price: 2899,
    originalPrice: 4599,
    rating: 4.1,
    reviews: 834,
    badge: "Value Pick",
    image:
      "https://source.unsplash.com/900x700/?bluetooth,speaker,product"
  },
  {
    id: 6,
    name: "Air Purifier for Home",
    brand: "PureFlow",
    price: 6499,
    originalPrice: 9899,
    rating: 4.0,
    reviews: 537,
    badge: "Home Select",
    image:
      "https://source.unsplash.com/900x700/?air,purifier,product"
  },
  {
    id: 7,
    name: "Ergonomic Office Chair",
    brand: "WorkEase",
    price: 11999,
    originalPrice: 16999,
    rating: 4.6,
    reviews: 962,
    badge: "Editor Choice",
    image:
      "https://source.unsplash.com/900x700/?office,chair,product"
  },
  {
    id: 8,
    name: "Stainless Steel Blender",
    brand: "BlendMax",
    price: 3199,
    originalPrice: 4899,
    rating: 4.2,
    reviews: 712,
    badge: "Kitchen Best",
    image:
      "https://source.unsplash.com/900x700/?blender,appliance,product"
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.badge.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) => {
      return currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="app-shell">
      <Header
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="marketplace-main">
        <section className="hero-strip" aria-label="Promotions">
          <div className="hero-grid">
            <p className="hero-title">NORTHLINE STORE</p>
            <p className="hero-copy">Minimal design. Maximum utility. Shop premium tech and home essentials in a clean, monochrome storefront.</p>
          </div>
        </section>

        <div className="content-grid">
          <section className="catalog-panel" aria-label="Product catalog">
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              totalProducts={products.length}
              searchQuery={searchQuery}
            />
          </section>

          <aside className="cart-panel" aria-label="Shopping cart summary">
            <Cart
              cartItems={cartItems}
              total={subtotal}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeFromCart={removeFromCart}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
