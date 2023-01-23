const CategoryItem = props => {
    return (
        <span className="px-5 py-1 bg-blue-600 rounded-2xl text-white text-sm mr-4">
            {props.category.name}
        </span>
    )
}

export default CategoryItem