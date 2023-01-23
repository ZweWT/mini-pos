const CartItem = (props) => {
    // remove design and props.onRemove
    // add and decrease design => props.onAdd, props.onDecrease
    // Pay Now button adn props.onOrder
    return (
        <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
                <img src="https://source.unsplash.com/4u_nRgiLW3M/600x600" className="w-10 h-10 object-cover rounded-md" alt="" />
                <span className="ml-4 font-semibold text-sm">{props.item.name}</span>
            </div>
            <div className="w-32 flex justify-between">
                <span className="px-3 py-1 rounded-md bg-gray-300 " onClick={props.onDecrease}>-</span>
                <span className="font-semibold mx-4">{props.item.amount}</span>
                <span className="px-3 py-1 rounded-md bg-gray-300 " onClick={props.onAdd}>+</span>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
                {props.item.cost}
            </div>
        </div>


    )

    
}

export default CartItem