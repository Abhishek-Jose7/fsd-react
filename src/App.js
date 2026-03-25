import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentPage from "./pages/PaymentPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="new-arrivals" element={<CategoryPage categoryKey="new-arrivals" />} />
        <Route path="electronics" element={<CategoryPage categoryKey="electronics" />} />
        <Route path="home-kitchen" element={<CategoryPage categoryKey="home-kitchen" />} />
        <Route path="workspace" element={<CategoryPage categoryKey="workspace" />} />
        <Route path="deals" element={<CategoryPage categoryKey="deals" />} />
        <Route path="payment" element={<PaymentPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
