import Image from "next/image"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_section}>
        <div className={styles.company_details}>
          <div className={styles.logo}>
            <img src="./flaimed.JPG" alt="" />
            <div className={styles.location_contact}>
              <p>71-71 Shelton Street, Covent Garden, <br />Londoan, United Kingdom, WC2H 9JQ</p>
              <p>For all things business:<br />support@flaimed.com</p>
            </div>
          </div>
        </div>
        <div className={styles.site_details}>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>News</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
          <div>
            <span>Terms of Use</span>&nbsp;|&nbsp;<span>Privacy Policy</span>
          </div>
          <div className={styles.copyright}>
            Copyright© 2023 - 2024 Flaimed. All Rights Reserved
          </div>
        </div>
        <div className={styles.social_buttons}>
          <img src="./playstore.png" alt="" />
          <img src="./applestore.png" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer