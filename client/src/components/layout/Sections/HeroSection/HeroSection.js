import styles from "./HeroSection.module.css";
import { useLocation } from "react-router-dom";
import SearchBar from "../../../UI/SearchBar/SearchBar";

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
          </div>
        </div>
      </div>
      {pathname === "/" && <SearchBar />}
      {pathname.startsWith("/solicita-serviciu") && <SearchBar />}{" "}
    </div>
  );
};

export default HeroSection;
