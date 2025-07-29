import styles from "./HeroSection.module.css";
import { useLocation } from "react-router-dom";
import SearchBar from "../../../UI/SearchBar/SearchBar";

import { contactInfo } from "../../../../config/contactInfo";

import ConstructionSideImage from "../../../../assets/images/background-images/construction-side-image.webp";
import OfficeSideImage from "../../../../assets/images/background-images/office-side-image.webp";

const HeroSection = ({
  badgeText,
  title,
  highlightText,
  description,
  imageSrc,
  popularServicesSection,
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={styles.hero}>
      {pathname.startsWith("/solicita-serviciu") && (
        <div
          className={styles.bgOverlay}
          style={{
            backgroundImage: `url(${ConstructionSideImage})`,
          }}
        ></div>
      )}
      {pathname.startsWith("/devino-prestator") && (
        <div
          className={styles.bgOverlay}
          style={{
            backgroundImage: `url(${OfficeSideImage})`,
          }}
        ></div>
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.badge}>{badgeText}</span>
            <h1 className={styles.title}>
              {title} <span className={styles.highlight}>{highlightText}</span>
            </h1>
            <p className={styles.description}>{description}</p>

            {popularServicesSection && (
              <div className={styles.popularServicesSection}>
                <h3 className={styles.popularServicesTitle}>
                  {popularServicesSection.title}
                </h3>
                <div className={styles.serviceIconsContainer}>
                  {popularServicesSection.icons.map((item, index) => (
                    <div key={index} className={styles.serviceIconItem}>
                      <div className={styles.iconCircle}>
                        {typeof item.icon === "string" ? item.icon : item.icon}
                      </div>
                      <p className={styles.iconText}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.imageContainer}>
            <img
              src={imageSrc}
              alt="background-cover"
              className={styles.heroImage}
            />
            <div className={styles.phoneSection}>
              <p className={styles.phoneMessage}>Sună Acum!</p>
              <div className={styles.phoneCard}>
                <div className={styles.phoneIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a
                  href={`tel:${contactInfo.phoneFormatted}`}
                  className={styles.phoneNumber}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pathname === "/" && <SearchBar />}
      {pathname.startsWith("/solicita-serviciu") && <SearchBar />}{" "}
    </div>
  );
};

export default HeroSection;
