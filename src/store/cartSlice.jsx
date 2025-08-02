import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log("existingItem: ", existingItem);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          salary: newItem.salary,
          type: newItem.type,
          company: newItem.company,
        });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
