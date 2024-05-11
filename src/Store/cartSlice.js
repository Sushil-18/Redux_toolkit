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
      const existingItem = state.items.find(
        (item) => action.payload === item.id
      );
      if (existingItem) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem);
      }
      state.totalItems -= 1;
      state.totalPrice -= existingItem.Price;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
