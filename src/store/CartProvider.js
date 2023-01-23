import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    subTotal: 0,
    tax: 0,
    total: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedSubTotal = state.subTotal + action.item.cost
        const updatedTax = updatedSubTotal * 5 / 100
        const updatedTotal = updatedSubTotal + updatedTax
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if(existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount++ 
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItem = {
                ...action.item,
                amount: 1
            }

            updatedItems = state.items.concat(updatedItem)
        }
        return {
            items: updatedItems,
            subTotal: updatedSubTotal,
            tax: updatedTax,
            total: updatedTotal
        }
    }

    if (action.type === "DECREASE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedSubTotal = state.subTotal - existingCartItem.cost;
        const updatedTax = updatedSubTotal * 5 / 100;
        const updatedTotal = updatedSubTotal + updatedTax

        let updatedItems;
        if(existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.item.id)
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            subTotal: updatedSubTotal,
            tax: updatedTax,
            total: updatedTotal
        }
        
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const removedCost = existingCartItem.cost * existingCartItem.amount;
        const updatedSubTotal = state.subTotal - removedCost; 
        const updatedTax = updatedSubTotal * 5 / 100;
        const updatedTotal = updatedSubTotal + updatedTax;
        const updateItems = state.items.filter(item => item.id !== action.item.id);

        return {
            items: updateItems,
            subTotal: updatedSubTotal,
            tax: updatedTax,
            total: updatedTotal
        } 
    }

    if (action.type === "ORDER") {
        return defaultCartState;
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        console.log("dispatch add")
        dispatchCartAction({type: "ADD", item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id})
    }

    const decreaseItemFromCartHandler = (id) => {
        dispatchCartAction({type: "DECREASE", id: id})
    }

    const orderCartHandler = () => {
        dispatchCartAction({type: "ORDER"})
    }

    const cartContext = {
        items: cartState.items,
        subTotal: cartState.subTotal,
        tax: cartState.tax,
        total: cartState.total,
        addItem: (item) => addItemToCartHandler,
        decreaseItem: (id) => decreaseItemFromCartHandler,
        removeItem: (id) => removeItemFromCartHandler,
        orderItem: orderCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider