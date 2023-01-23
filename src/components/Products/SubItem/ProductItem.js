import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (event) => {
        event.preventDefault();
        cartCtx.addItem({
            item: props.item,
        });
    }
    
    return (
        <li onClick={addToCartHandler}>
            <div>img</div>
            <div>{props.item.name}</div>
            <div>{props.item.cost}</div>
        </li>
    )
}

export default ProductItem