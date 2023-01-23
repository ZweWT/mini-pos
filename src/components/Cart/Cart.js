import { useContext } from "react";

import CartContext from "../../store/cart-context";
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

    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    item={item}
                    subTotal={subTotal}
                    tax={tax}
                    total={total} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onDecrease={cartItemDecreaseHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );
    
    return (
        <div>
            {cartItems}
            <div>
                <span>Subtotal</span>
                <span>Ks {subTotal}</span>
            </div>
            <div>
                <span>Tax (5%)</span>
                <span>Ks {tax}</span>
            </div>
            <div>
                <span>Total</span>
                <span>Ks {total}</span>
            </div>

            <div>
                <button>Pay Now</button>
            </div>
        </div>
    )
}

export default Cart