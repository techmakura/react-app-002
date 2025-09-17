import { Link } from "react-router-dom";
import Navbar from "./navbar";

const DesktopNavbar = () => {
    return (
        <>
            <div className="desktop-nav-wrapper">
                <div class="desktop-nav">
                    <div class="brand-logo">
                        <Link to="/">
                            <img src="https://boosin.wpbingosite.com/wp-content/themes/boosin/assets/images/logo/logo.svg"
                                alt="brand logo" />
                        </Link>
                    </div>

                    <div class="navbar-search">
                        <input type="text" placeholder="Search Products" />
                        <div class="search-icon">
                            <img src="./images/search.png" height="20px" width="20px" />
                        </div>
                    </div>

                    <div class="navbar-right">
                        <div class="navbar-login navbar-right-item">
                            <img src="./images/heart.webp" height="14px" width="14px" />
                        </div>
                        <div class="navbar-fav navbar-right-item">
                            <img src="./images/heart.webp" height="14px" width="14px" />
                        </div>
                        <div class="navbar-cart navbar-right-item">
                            <img src="./images/heart.webp" height="14px" width="14px" />
                        </div>
                    </div>
                </div>

                <Navbar />

            </div>
        </>
    )
}

export default DesktopNavbar;