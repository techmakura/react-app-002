import Slider from "react-slick";

const SliderComponent = (props) => {
    const { children } = props;
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderComponent;