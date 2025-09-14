import { Link } from "react-router-dom";

const SocialIcons = (props) => {
    const { link, imageSrc, size } = props;

    const height = size == "sm" ? "14px" : "md" ? "18px" : "24px"

    return (
        <li>
            <Link to={link}>
                <img src={imageSrc} height={height} width={height} />
            </Link>
        </li>
    )
}

export default SocialIcons;