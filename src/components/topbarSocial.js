import SocialIcons from "./socialIcons";

const TopbarSocial = () => {
    return (
        <ul class="topbar-social-wrapper">
            <SocialIcons link="https://tiktok.com/username" imageSrc="/images/tiktok.png" size="md" />
            <SocialIcons link="https://twitter.com/username" imageSrc="/images/images.png"   size="md"/>
            <SocialIcons link="https://instagram.com/username" imageSrc="/images/tiktok.png"  size="md"/>
        </ul>
    )
}

export default TopbarSocial;