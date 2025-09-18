
const CategoryItem = (props) => {
    const { category_name, image_link, image_alt, key } = props

    return (
        <div class="category-item" key={key}>
            <div class="category-title">{category_name}</div>
            <div class="category-image">
                <img src={`${process.env.REACT_APP_API_URL}/uploads/${image_link}`}
                    alt={image_alt} />
            </div>
        </div>
    )
}

export default CategoryItem;