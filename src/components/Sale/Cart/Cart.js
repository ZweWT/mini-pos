import { Fragment } from "react";

// import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem";
import { useState, dispatch } from "../../../store/reducer";

const Cart = (props) => {
    // const cartCtx = useContext(CartContext);
    // const subTotal = cartCtx.subTotal;
    // const tax = cartCtx.tax;
    // const total = cartCtx.total;
    
    // const cartItemRemoveHandler = id => {
    //     cartCtx.removeItem(id);
    // };

    // const cartItemAddHandler = item => {
    //     cartCtx.addItem(item);
    // }

    // const cartItemDecreaseHandler = id => {
    //     cartCtx.decreaseItem(id);
    // }

    // const cartItemOrderHandler = () => {
    //     cartCtx.orderItem();
    // }

    const subTotal = useState(state => state.subTotal);
    const stateItems = useState(state => state.items);
    const tax = useState(state => state.tax);
    const total = useState(state => state.total);
    

    const cartItems = stateItems.map((item) => 
                <CartItem 
                    key={item.id}
                    item={item} 
                    onRemove={dispatch.bind(null, {type: "REMOVE"}, item)}
                    onAdd={dispatch.bind(null, {type: "ADD"}, item)}
                    onDecrease={dispatch.bind(null, {type: "DECREASE"}, item)}
                />
            )
    
    return (
        <Fragment>
            <div className="px-5 py-4 mt-5 overflow-y-auto h-64">
                {cartItems}
            </div>
            <div className="bg-[#EEF1FF]">
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
                        <div className="px-4 py-4 rounded-md shadow-lg text-center bg-blue-600 text-white font-semibold"
                            onClick={() => dispatch({type: "ORDER"})}
                        >
                            Pay Now
                        </div>
            </div>
            
        </Fragment>
        

        

    )
}

export default Cart