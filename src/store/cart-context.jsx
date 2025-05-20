import React, { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  onDelete: (id) => {},
});

export default CartContext;
