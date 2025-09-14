
const HamburgerMenu = (props) => {
    const { onClick } = props;

    return (
        <div class="hamburger-menu" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <path
                    d="M29 8H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 28H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 18H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4z"
                    fill="#000000"></path>
            </svg>

        </div>
    )
}

export default HamburgerMenu;