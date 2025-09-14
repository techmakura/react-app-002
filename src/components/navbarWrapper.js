import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const NavbarWrapper = () => {
    return (
        <div class="navbar">
            <MobileNavbar />
            <DesktopNavbar />
        </div>
    )
}

export default NavbarWrapper;