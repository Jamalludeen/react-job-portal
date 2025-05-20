import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    if (!state.items.some((job) => job.id === action.item.id)) {
      const updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
      };
    }
    return state;
  } else if (action.type === "DELETE") {
    if (state.items.some((job) => job.id === action.id)) {
      const updatedItems = state.items.filter((job) => job.id !== action.id);
      return {
        items: updatedItems,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addJobItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeJobItemFromCartHandler = (id) => {
    dispatchCartState({ type: "DELETE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addJobItemToCartHandler,
    onDelete: removeJobItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
