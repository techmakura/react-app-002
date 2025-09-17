import NavbarItem from "./NavItem"

const Navbar = () => {
    return (
        <div class="nav-wrapper">
            <nav>
                <ul>
                    <NavbarItem link="/" label="Home" />
                    <NavbarItem link="/books" label="Book" />
                    <NavbarItem link="/author" label="Author" />
                    <NavbarItem link="/genre" label="Genre" />
                    <NavbarItem link="/publisher" label="Publisher" />
                </ul>
            </nav>

            <div class="coupon">
                30% Discount For The First Order!
            </div>
        </div>
    )
}

export default Navbar;