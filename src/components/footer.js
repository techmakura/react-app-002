import { ButtonStyle } from "./components.styled";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div class="fat-footer">
                <div class="footer-newsletter footer-section">
                    <div class="footer-item-title uppercase">SIGN UP FOR 10% OFF</div>
                    <div class="newsletter-text">
                        <p>Be the first to know about new releases, exclusive <span>promotions, events and styling
                            tips!</span></p>
                    </div>
                    <div class="newsletter-input">
                        <input type="text" placeholder="Email address..." />
                        <div class="newletter-input-icon"></div>
                    </div>
                    <div class="newsletter-social-wrapper">
                        <div class="newletter-social-item">
                            <a href="#">
                                <img src="./images/images.png" height="20px" width="20px" />
                            </a>
                        </div>
                        <div class="newletter-social-item">
                            <a href="#">
                                <img src="./images/images.png" height="20px" width="20px" />
                            </a>
                        </div>
                        <div class="newletter-social-item">
                            <a href="#">
                                <img src="./images/images.png" height="20px" width="20px" />
                            </a>
                        </div>
                        <div class="newletter-social-item">
                            <a href="#">
                                <img src="./images/images.png" height="20px" width="20px" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-contact footer-section">
                    <div class="footer-item-title">information</div>
                    <div class="footer-contact-text">
                        <p>Contact our customer happiness team</p>
                        <p>Monday-Friday 9am-5pm</p>
                        <p>info@email.com</p>
                        <p class="contact-no">(+1)-613-333-0101</p>
                    </div>
                </div>

                <div class="footer-about footer-section">
                    <div class="footer-item-title">About us</div>
                    <div class="footer-navigation">
                        <ul>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Track your order</a>
                            </li>
                            <li>
                                <a href="#">Returns policy</a>
                            </li>
                            <li>
                                <a href="#">Delivery Information</a>
                            </li>
                            <li>
                                <a href="#">Loyalty program</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer-help footer-section">
                    <div class="footer-item-title">Need help?</div>
                    <div class="footer-help-links">
                        <ul>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Track your order</a>
                            </li>
                            <li>
                                <a href="#">Returns policy</a>
                            </li>
                            <li>
                                <a href="#">Delivery Information</a>
                            </li>
                            <li>
                                <a href="#">Loyalty program</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="lower-footer">
                <p class="copywrite">© 2025 - Boosin. All Rights Reserved.</p>
                <div class="footer-widgets">
                    <img src="https://boosin.wpbingosite.com/wp-content/uploads/2020/06/payment-1.png" height="24px" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
