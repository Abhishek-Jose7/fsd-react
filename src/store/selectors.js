import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state) => state.products.items;
export const selectSearchQuery = (state) => state.ui.searchQuery;
export const selectCartItems = (state) => state.cart.items;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectSearchQuery],
  (products, searchQuery) => {
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
  }
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const selectSubtotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
