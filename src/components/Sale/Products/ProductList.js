import ProductItem from "./SubItem/ProductItem";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: 'shoe',
        categoryId: 1,
        cost: 10000
    },
    {
        id: 2,
        name: 'shirt',
        categoryId: 2,
        cost: 10000
    },
    {
        id: 3,
        name: 'hat',
        categoryId: 3,
        cost: 10000
    }
]

const ProductList = () => {
    const products = DUMMY_PRODUCTS.map(item => <ProductItem  key={item.id} id={item.id} item={item}/>);
    return (
        <div className="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
            {products}
        </div>
    ) 
}

export default ProductList