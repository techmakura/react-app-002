import styles from './header.module.css';
import "./header.css";
import { InputStyle, InputWrapper } from "./components.styled";

const Header = () => {
    return (<header className={styles.header}>
        <nav>
            <InputWrapper>
                <ul className={styles.list}>
                    <li className={styles['list-item']}>
                        <a href='#'>Home</a>
                    </li>
                    <li className={styles['list-item']}>
                        <a href='#'>Contact</a>
                    </li>
                    <li className={styles['list-item']}>
                        <a href='#'>About</a>
                    </li>
                </ul>
            </InputWrapper>
        </nav>
    </header>);
};

export default Header;