import { Fragment } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const Products = () => {
    return (
        <Fragment>
            <CategoryList />
            <ProductList />
        </Fragment>
    )
}

export default Products