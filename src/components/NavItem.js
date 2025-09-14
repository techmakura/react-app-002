import { Link } from "react-router-dom";

const NavbarItem = (props) => {
    const { link, label } = props;
    return (
        <li>
            <Link to={link}>{label}</Link>
        </li>
    )
}

export default NavbarItem;