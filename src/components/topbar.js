import TopbarSocial from "./topbarSocial";

const Topbar = () => {
    return (
        <div class="topbar">
            <div class="topbar-slogan secondary-text">
                Free Shipping on Orders of $40 or More
            </div>

            <div class="topbar-right">
                <div class="topbar-contact secondary-text">CALL US: 123-567-4321</div>
                <TopbarSocial />
            </div>
        </div>
    )
}

export default Topbar;