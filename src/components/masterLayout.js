import Footer from "./footer";
import Header from "./header";

const MasterLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MasterLayout;