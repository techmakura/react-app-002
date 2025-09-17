import SliderComponent from "./slider";
import "./homepageSlider.css";

const HomepageSlider = () => {
    const sliderItems = [
        {
            image_url: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-21.jpg"
        },
        {
            image_url: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-20.jpg"
        },
        {
            image_url: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-19.jpg"
        },
        {
            image_url: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-18.jpg"
        }
    ]
    return (
        <SliderComponent>
            {sliderItems.map((value, index) => (
                <div className="slider-item">
                    <img key={index} src={value.image_url} />
                </div>
            ))}
        </SliderComponent>
    )
}

export default HomepageSlider;