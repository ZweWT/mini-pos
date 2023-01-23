import CartProvider from "../../store/CartProvider"
import Cart from "./Cart/Cart"
import Header from "./Header"
import Products from "./Products/Products"

//add header component here
const Sale = () => {
    return (
      <CartProvider>
        <div className="container mx-auto px-5 bg-white">
      <div className="flex lg:flex-row flex-col-reverse shadow-lg">
      
        {/* left section start*/}
        <div className="w-full lg:w-3/5 min-h-screen shadow-lg">
          <Header />
            <Products />
            
            
        </div>
        {/* left section end */}

        {/* right section end */}
        <div className="w-full lg:w-2/5">
          
          {/* right section header start */}
          <div className="flex flex-row items-center justify-between px-5 mt-5">
            <div className="font-bold text-xl">Order Details</div>
          </div>
          {/* right section header end*/}
          <Cart />  
        </div>
        {/* right section end */}
        
      </div>
    </div>

      </CartProvider>
    )
}

export default Sale