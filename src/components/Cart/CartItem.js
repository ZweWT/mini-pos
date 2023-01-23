const CartItem = () => {
    // remove design and props.onRemove
    // add and decrease design => props.onAdd, props.onDecrease
    return (
        <li>
            <div>img</div>
            <div>{props.item.name}</div>
            <div>{props.item.cost}</div>
            <div>{props.item.amount}</div>
        </li>
    )
}

export default CartItem