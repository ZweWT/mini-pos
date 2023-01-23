import { Fragment } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const Products = () => {
    return (
        <Fragment>
            <CategoryList />
            <main>
                <ProductList />
            </main>
        </Fragment>
    )
}

export default Products