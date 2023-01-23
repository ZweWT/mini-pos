import CategoryItem from "./SubItem/CategoryItem";

const DUMMY_CATEGORIES = [
    {
        id: 1,
        name: 'shoe',
    },
    {
        id: 2,
        name: 'shirt',
    },
    {
        id: 3,
        name: 'hat',
    }
]

const CategoryList = () => {
    const categories = DUMMY_CATEGORIES.map( category => <CategoryItem key={category.id} category={category} />);
    return (
        <div className="mt-5 flex flex-row px-5">
            {categories}
        </div>
    )
}

export default CategoryList