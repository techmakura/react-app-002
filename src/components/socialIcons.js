import { Link } from "react-router-dom";

const SocialIcons = (props) => {
    const { link, icon } = props;

    return (
        <li>
            <Link to={link}>
                {icon}
            </Link>
        </li>
    )
}

export default SocialIcons;