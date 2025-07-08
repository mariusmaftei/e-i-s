"use client";

import styles from "./HeroSection.module.css";
import SearchBar from "../../../UI/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

const HeroSection = ({
  badgeText,
  title,
  highlightText,
  description,
  imageSrc,
  popularServicesSection, // { title: string, icons: Array<{ icon: string | React.ReactNode, text: string }> }
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={styles.hero}>
      <div
        className={styles.bgOverlay}
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x1080?text=Background')",
        }}
      ></div>
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
              src={imageSrc || "/placeholder.svg"}
              alt="Hero Image"
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
