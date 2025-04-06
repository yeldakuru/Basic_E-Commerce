import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Şirket Bilgileri */}
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Müşteri Destek */}
                <div className="footer-section">
                    <h4>Customer Support</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                {/* Sosyal Medya */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                {/* Abonelik */}
                <div className="footer-section">
                    <h4>Subscribe</h4>
                    <p>Get the latest updates and offers.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Yelda E-commerce. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
