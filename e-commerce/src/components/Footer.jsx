import React from 'react'
import styles from "../css/Footer.module.css"
import logo from "../../public/logo-transparent-svg.svg"
import { FacebookSharp, Instagram, Twitter, YouTube } from '@mui/icons-material'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_links}>
                {/* Logo Section */}
                <div className={styles.logo}>
                    <a className={styles.logo_link} href="/">
                        <img className={styles.logo_img} src={logo} alt="" />
                    </a>

                    <p className={styles.logo_brand}>Nous avons des vêtements qui correspondent<br />
                        à votre style et que vous êtes fier de porter.<br /> Des femmes aux hommes.</p>

                    <div className={styles.social_links}>
                        <a href="https://github.com/Xudesh"><FacebookSharp /></a>
                        <a href="https://www.instagram.com/xudaybergeen/"><Instagram /></a>
                        <a href="https://twitter.com/Xudesh"><Twitter /></a>
                        <a href="https://youtube.com/@sitedeveloperfrom"><YouTube /></a>
                    </div>
                </div>

                {/* Company Section */}
                <div className={styles.company}>
                    <p className={styles.company_heading}>Company</p>

                    <a className={styles.company_link} href="#">Freelance</a>
                    <a className={styles.company_link} href="#">Features</a>
                    <a className={styles.company_link} href="#">About</a>
                    <a className={styles.company_link} href="#">Works</a>


                </div>

                {/* Help Section */}
                <div className={styles.help}>
                    <p className={styles.help_heading}>Help</p>

                    <a className={styles.help_link} href="#">Terms & Conditions</a>
                    <a className={styles.help_link} href="#">Delivery Details</a>
                    <a className={styles.help_link} href="#">Privacy Policy</a>
                    <a className={styles.help_link} href="#">Support</a>

                </div>

                {/* FAQ Section */}
                <div className={styles.faq}>
                    <p className={styles.faq_heading}>FAQ</p>

                    <a className={styles.faq_link} href="#">Manage Deliveries</a>
                    <a className={styles.faq_link} href="#">Payments</a>
                    <a className={styles.faq_link} href="#">Orders</a>
                    <a className={styles.faq_link} href="#">Account</a>

                </div>

                {/* Resoures Section */}
                <div className={styles.resources}>
                    <p className={styles.resource_heading}>Resources</p>

                    <a className={styles.resource_link} href="#">Tutroial</a>
                    <a className={styles.resource_link} href="#">How to Blog</a>
                    <a className={styles.resource_link} href="#">Our Collection</a>
                    <a className={styles.resource_link} href="#">Colloboration & Dior</a>

                </div>
            </div>

            <div className={styles.privacy}>
                <p className={styles.privacy_text}>Gracê &copy; 2023-2024 All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer