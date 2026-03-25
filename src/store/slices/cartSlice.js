import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({ ...product, quantity: 1 });
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (!existingItem) {
        return;
      }

      existingItem.quantity -= 1;
      state.items = state.items.filter((item) => item.quantity > 0);
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
