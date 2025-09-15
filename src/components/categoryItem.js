
const CategoryItem = (props) => {
    const { category_name, image_link, image_alt, key } = props

    return (
        <div class="category-item" key={key}>
            <div class="category-title">{category_name}</div>
            <div class="category-image">
                <img src={image_link}
                    alt={image_alt} />
            </div>
        </div>
    )
}

export default CategoryItem;