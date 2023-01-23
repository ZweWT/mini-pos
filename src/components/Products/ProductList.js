import ProductItem from "./SubItem/ProductItem";

const DUMMY_PRODUCTS = [
    {
        id: '1234-567-89',
        name: 'shoe',
        categoryId: 1,
        cost: 10000
    },
    {
        id: '1242-567-67',
        name: 'shirt',
        categoryId: 2,
        cost: 10000
    },
    {
        id: '1234-567-89',
        name: 'hat',
        categoryId: 3,
        cost: 10000
    }
]

const ProductList = () => {
    const products = DUMMY_PRODUCTS.map(item => <ProductItem  key={item.id} item={item}/>);
    return <section>
        <ul>
            {products}
        </ul>
    </section>
}

export default ProductList