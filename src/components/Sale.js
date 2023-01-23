import CartProvider from "../store/CartProvider"
import Cart from "./Cart/Cart"
import Products from "./Products/Products"

//add header component here
const Sale = () => {
    return (
        <CartProvider>
            <Products />
            <Cart />
        </CartProvider>
    )
}

export default Sale