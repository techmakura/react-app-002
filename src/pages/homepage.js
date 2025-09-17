import Block from "../components/block";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroSlider from "../components/heroslider";
import HomepageSlider from "../components/homepageSlider";
import NewArrivals from "../components/newArrivals";
import Vendor from "../components/vendor";

const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSlider />
            <Vendor />
            <Block />
            <Categories />
            <HomepageSlider />
            <NewArrivals />
            <Footer />
        </>
    )
}

export default Homepage;