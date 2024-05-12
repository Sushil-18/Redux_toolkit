import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += newItem.Price;
    },
    removeItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => action.payload === item.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity--;
      }
      state.totalItems -= 1;
      state.totalPrice -= existingItem.Price;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
