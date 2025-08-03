import styles from './header.module.css'; 
import "./header.css";

const Header = () => {
    return (<header className={styles.header}>
        <nav>
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
        </nav>
    </header>);
};

export default Header;