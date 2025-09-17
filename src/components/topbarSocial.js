import SocialIcons from "./socialIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopbarSocial = () => {
    return (
        <ul class="topbar-social-wrapper">
            <SocialIcons link="https://twitter.com/username" icon={<FontAwesomeIcon icon="fa-brands fa-twitter" />} />
            <SocialIcons link="https://tiktok.com/username" icon={<FontAwesomeIcon icon="fa-brands fa-tiktok" />}  />
            <SocialIcons link="https://instagram.com/username" icon={<FontAwesomeIcon icon="fa-brands fa-instagram" />}/>
            <SocialIcons link="https://facebook.com/username" icon={<FontAwesomeIcon icon="fa-brands fa-facebook-f" />}/>
        </ul>
    )
}

export default TopbarSocial;