import CategoryItem from "./categoryItem";

const Categories = () => {
    const categoryData = [
        {
            category_name: "Adventure",
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/cat-6.jpg",
            image_alt: "adventure category"
        },
        {
            category_name: "Design & Arts",
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/cat-1.jpg",
            image_alt: "design & arts category"
        },
        {
            category_name: "Social & civil",
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/cat-3.jpg",
            image_alt: "Social & civil category"
        },
        {
            category_name: "Literatur",
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/cat-5.jpg",
            image_alt: "Literature category"
        }
    ]

    return (
        <section class="category">
            <h2><span>Top categories</span></h2>

            <div class="category-wrapper">
                {categoryData.map((value, index) => (
                    <CategoryItem category_name={value.category_name} image_alt={value.image_alt} image_link={value.image_link} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Categories;