import Slider from "react-slick";

const SliderComponent = (props) => {
    const { children, slidesToShow } = props;
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderComponent;