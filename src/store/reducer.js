import React from "react";

let state = { 
    items: [],
    subTotal: 0,
    tax: 0,
    total: 0
};

const listeners = new Map();

function reduce(state, action, val) {
  switch (action.type) {
    case "ADD":
        const addUpdatedSubTotal = state.subTotal + val.cost
        const addUpdatedTax = addUpdatedSubTotal * 5 / 100
        const addUpdatedTotal = addUpdatedSubTotal + addUpdatedTax
        
        const addExistingCartItemIndex = state.items.findIndex(item => item.id === val.id);
        const addExistingCartItem = state.items[addExistingCartItemIndex];

        let addUpdatedItem;
        let addUpdatedItems;

        if(addExistingCartItem) {
            addUpdatedItem = {
                ...addExistingCartItem,
                amount: addExistingCartItem.amount + 1 
            };
            // addUpdatedItem.amount = addExistingCartItem.amount + 1
            console.log("reducer item: ", addUpdatedItem)

            addUpdatedItems = [...state.items];
            addUpdatedItems[addExistingCartItemIndex] = addUpdatedItem
            console.log("reducer items: ", addUpdatedItems)
        } else {
            addUpdatedItem = {
                ...val,
                amount: 1
            }

            addUpdatedItems = state.items.concat(addUpdatedItem)
        }
        return {
            items: addUpdatedItems,
            subTotal: addUpdatedSubTotal,
            tax: addUpdatedTax,
            total: addUpdatedTotal
        }
    case "DECREASE":
        const decreaseExistingCartItemIndex = state.items.findIndex(item => item.id === val.id);
        const decreaseExistingCartItem = state.items[decreaseExistingCartItemIndex];
        const decreaseUpdatedSubTotal = state.subTotal - decreaseExistingCartItem.cost;
        const decreaseUpdatedTax = decreaseUpdatedSubTotal * 5 / 100;
        const decreaseUpdatedTotal = decreaseUpdatedSubTotal + decreaseUpdatedTax

        let decreaseUpdatedItems;
        if(decreaseExistingCartItem.amount === 1) {
            decreaseUpdatedItems = state.items.filter(item => item.id !== val.id)
        } else {
            const updatedItem = {...decreaseExistingCartItem, amount: decreaseExistingCartItem.amount - 1 };
            decreaseUpdatedItems = [...state.items];
            decreaseUpdatedItems[decreaseExistingCartItemIndex] = updatedItem;
        }

        return {
            items: decreaseUpdatedItems,
            subTotal: decreaseUpdatedSubTotal,
            tax: decreaseUpdatedTax,
            total: decreaseUpdatedTotal
        }
    case "REMOVE":
        const existingCartItemIndex = state.items.findIndex(item => item.id === val.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const removedCost = existingCartItem.cost * existingCartItem.amount;
        const updatedSubTotal = state.subTotal - removedCost; 
        const updatedTax = updatedSubTotal * 5 / 100;
        const updatedTotal = updatedSubTotal + updatedTax;
        const updateItems = state.items.filter(item => item.id !== val.id);

        return {
            items: updateItems,
            subTotal: updatedSubTotal,
            tax: updatedTax,
            total: updatedTotal
        }
    case "ORDER":
        return {
            items: [],
            subTotal: 0,
            tax: 0,
            total: 0
        }
    default:
      throw new Error();
  }
}

export function dispatch(action, val) {
  let i = 0;
  const prevValues = Array.from(listeners, ([getValue]) => getValue(state));

  // Gets the new state
  state = reduce(state, action, val);

  // Notify subscribed components
  listeners.forEach((setValue, getValue) => {
    const value = getValue(state);
    if (value !== prevValues[i++]) setValue(value);
  });
}

export function useState(getValue) {
  const [value, setValue] = React.useState(getValue(state));

  React.useEffect(() => {
    listeners.set(getValue, setValue);
    return () => listeners.delete(getValue);
  }, [getValue]);

  return value;
}