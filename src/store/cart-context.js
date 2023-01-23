import React from "react";

const CartContext = React.createContext({
    items: [],
    subTotal: 0,
    tax: 0,
    total: 0,
    addItem: (item) => {},
    decreaseItem: (id) => {},
    removeItem: (id) => {},
    orderItem: () => {},
})

export default CartContext;