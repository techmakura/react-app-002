import styles from './header.module.css';
import "./header.css";
import { InputStyle, InputWrapper } from "./components.styled";
import { Link } from 'react-router-dom';
import "./global.css";
import Topbar from './topbar';
import Navbar from './navbarWrapper';
import StickyBase from "./stickyBase";

const Header = () => {
    return (
        <header>
           <Topbar />
            <Navbar />
            <StickyBase />
        </header >
    );
};

export default Header;