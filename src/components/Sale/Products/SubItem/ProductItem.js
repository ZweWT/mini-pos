import { useContext } from "react";
import CartContext from "../../../../store/cart-context";

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (event) => {
        console.log(props.item)
        cartCtx.addItem({
            id: props.item.id,
            name: props.item.name,
            cost: props.item.cost
        });
    };
    
    return (
        <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between" onClick={addToCartHandler}>
            <div>
                <div className="font-bold text-gray-800">{props.item.name}</div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="self-end font-bold text-lg text-yellow-500">{props.item.cost}</span>
                <img src="https://source.unsplash.com/sc5sTPMrVfk/600x600" className=" h-14 w-14 object-cover rounded-md" alt="test" />
            </div>
        </div>
    )
}

export default ProductItem