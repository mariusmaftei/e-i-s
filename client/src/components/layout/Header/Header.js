import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import EISLogo from "../../../assets/images/logo/eis-service-logo.webp";
import { contactInfo } from "../../../config/contactInfo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logoContainer}>
                <img src={EISLogo} alt="E.I.S. Logo" className={styles.logo} />
              </div>
              <span className={styles.logoText}>E.I.S. Service</span>
            </Link>
          </div>

          <div className={styles.desktopNav}>
            <Link to="/" className={styles.navLink}>
              Acasă
            </Link>
            <Link to="/solicita-serviciu" className={styles.navLink}>
              Cere un serviciu
            </Link>
            <Link to="/devino-prestator" className={styles.navLink}>
              Oferă un serviciu
            </Link>
            <Link to="/despre" className={styles.navLink}>
              Despre noi
            </Link>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
            <a
              href={`tel:${contactInfo.phoneFormatted}`}
              className={styles.phoneLink}
            >
              📞 {contactInfo.phone}
            </a>
          </div>

          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuToggle}
              aria-label="Toggle menu"
            >
              <svg
                className={styles.menuIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu and Overlay */}
        {isMenuOpen && (
          <>
            <div
              className={styles.mobileMenuOverlay}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuContent}>
                <Link
                  to="/"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acasă
                </Link>
                <Link
                  to="/solicita-serviciu"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicii
                </Link>
                <Link
                  to="/devino-prestator"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Oferă un serviciu
                </Link>
                <Link
                  to="/despre"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Despre noi
                </Link>
                <Link
                  to="/contact"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href={`tel:${contactInfo.phoneFormatted}`}
                  className={styles.mobilePhoneLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 {contactInfo.phone}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
