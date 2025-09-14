import NavbarItem from "./NavItem"

const Navbar = () => {
    return (
        <div class="nav-wrapper">
            <nav>
                <ul>
                    <NavbarItem link="/home" label="Home" />
                    <NavbarItem link="/shop" label="Shop" />
                    <NavbarItem link="/product" label="Product" />
                    <NavbarItem link="/blog" label="Blog" />
                    <NavbarItem link="/page" label="Page" />
                </ul>
            </nav>

            <div class="coupon">
                30% Discount For The First Order!
            </div>
        </div>
    )
}

export default Navbar;