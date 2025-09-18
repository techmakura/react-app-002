import { useState, useEffect } from "react";
import CategoryItem from "./categoryItem";
import SliderComponent from "./slider";

const Categories = () => {

    const [category, setCategory] = useState([]);
    const [error, setError] = useState("");

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/genre`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY,
                    "Content-Type": "Application/json"
                }
            })

            const result = await response.json();
            setCategory(result);
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <section class="category">
            <h2><span>Top categories</span></h2>

            {/* <div class="category-wrapper"> */}
            <div className="container category-wrapper">
                <SliderComponent slidesToShow={4}>
                    {category.map((value, index) => (
                        <CategoryItem category_name={value.title} image_alt={value.title} image_link={value.cover_image} key={index} />
                    ))}
                    {/* </div> */}
                </SliderComponent>
            </div>
        </section>
    )
}

export default Categories;