import React from 'react';
import './footer.scss'; // Import your SCSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: example@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        {/* Add your social media icons here */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Car Battery Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
