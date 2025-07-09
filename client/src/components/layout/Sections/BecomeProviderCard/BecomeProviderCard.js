import OfficeWomanImage from "../../../../assets/images/eis-team-images/office-register.webp";
import { Link } from "react-router-dom";
import styles from "./BecomeProviderCard.module.css";

export default function BecomeProviderCard() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>DEVINO PRESTATOR</span>
              <h2 className={styles.ctaTitle}>
                Ești profesionist? Alătură-te platformei noastre!
              </h2>
              <p className={styles.ctaDescription}>
                Completează formularul de înscriere și noi îți vom găsi clientul
                potrivit rapid și eficient. Crește-ți afacerea cu ajutorul
                nostru!
              </p>
              <div className={styles.ctaButtonWrapper}>
                <Link to="/devino-prestator" className={styles.ctaButton}>
                  Înscrie-te ca specialist
                </Link>
              </div>
            </div>
            <div className={styles.ctaImageWrapper}>
              <img
                src={OfficeWomanImage || "/placeholder.svg"}
                alt="Devino Prestator"
                className={styles.ctaImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
