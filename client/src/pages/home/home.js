import HeroSection from "../../components/layout/Sections/HeroSection/HeroSection";
import Categories from "../../components/layout/Sections/Categories/Categories";
import FeaturedServices from "../../components/layout/Sections/FeaturedServices/FeaturedServices";
import OfficeWomanImage from "../../assets/images/office-register.png";
import styles from "./home.module.css";
import { ServiceProvider } from "../../context/ServiceContext";

const Home = () => {
  return (
    <ServiceProvider>
      <div className={styles.homePage}>
        <HeroSection />
        <Categories />
        <FeaturedServices />

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContainer}>
              <div className={styles.ctaGrid}>
                <div className={styles.ctaContent}>
                  <span className={styles.ctaBadge}>DEVINO PRESTATOR</span>
                  <h2 className={styles.ctaTitle}>
                    Ești un profesionist? Alătură-te platformei noastre
                  </h2>
                  <p className={styles.ctaDescription}>
                    Înscrie-te ca prestator de servicii și conectează-te cu
                    clienți din toată România. Crește-ți afacerea și primește
                    recenzii pentru serviciile tale.
                  </p>
                  <div className={styles.ctaButtonWrapper}>
                    <a href="#" className={styles.ctaButton}>
                      Înregistrează-te acum
                    </a>
                  </div>
                </div>
                <div className={styles.ctaImageWrapper}>
                  <img
                    src={OfficeWomanImage}
                    alt="Devino Prestator"
                    className={styles.ctaImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ServiceProvider>
  );
};

export default Home;
