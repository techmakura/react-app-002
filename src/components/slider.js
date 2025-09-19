import Slider from "react-slick";

const SliderComponent = (props) => {
    const { children, slidesToShow, slidesToShowTablet, slidesToShowMobile } = props;
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // When screen width is 768px or less
                settings: {
                    slidesToShow: slidesToShowTablet,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // When screen width is 480px or less
                settings: {
                    slidesToShow: slidesToShowMobile,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderComponent;