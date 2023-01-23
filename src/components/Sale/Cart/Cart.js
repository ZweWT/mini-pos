import { Fragment, useContext } from "react";

import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const subTotal = cartCtx.subTotal;
    const tax = cartCtx.tax;
    const total = cartCtx.total;
    
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    }

    const cartItemDecreaseHandler = id => {
        cartCtx.decreaseItem(id);
    }

    const cartItemOrderHandler = () => {
        cartCtx.orderItem();
    }

    const cartItems = cartCtx.items.map((item) => 
                <CartItem 
                    key={item.id}
                    item={item} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onDecrease={cartItemDecreaseHandler.bind(null, item.id)}
                    // onOrder={cartItemOrderHandler}
                />
            )
    
    return (
        <Fragment>
            <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
                {cartItems}
            </div>

            <div className="px-5 mt-5">
                <div className="py-4 rounded-md shadow-lg">
                <div className=" px-4 flex justify-between ">
                    <span className="font-semibold text-sm">Subtotal</span>
                    <span className="font-bold">{subTotal}</span>
                </div>
                <div className=" px-4 flex justify-between ">
                    <span className="font-semibold text-sm">Tax 5%</span>
                    <span className="font-bold">{tax}</span>
                </div>
                <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
                    <span className="font-semibold text-2xl">Total</span>
                    <span className="font-bold text-2xl">{total}</span>
                </div>
                </div>                
            </div>

            <div className="px-5 mt-5">
                <div className="px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold"
                    onClick={cartItemOrderHandler}
                >
                    Pay Now
                </div>
          </div>
        </Fragment>
        

        

    )
}

export default Cart