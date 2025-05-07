import styles from "./HeroSection.module.css";
import SearchBar from "../../../UI/SearchBar/SearchBar";
import EISTeamImage from "../../../../assets/images/eis_team.png";

const HeroSection = () => {
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
            <span className={styles.badge}>
              Servicii profesionale în toată România
            </span>
            <h1 className={styles.title}>
              Găsește <span className={styles.highlight}>Specialiști</span>{" "}
              pentru orice nevoie
            </h1>
            <p className={styles.description}>
              Conectează-te cu profesioniști verificați pentru toate nevoile
              tale casnice și de afaceri. Rapid, sigur și eficient.
            </p>

            {/* Statistici */}
            <div className={styles.stats}>
              <span className={styles.statItem}>
                <svg
                  className={styles.statIcon}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Peste 5000 de prestatori
              </span>
              <span className={styles.statItem}>
                <svg
                  className={styles.statIcon}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Servicii garantate
              </span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              src={EISTeamImage}
              alt="Servicii Profesionale"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* SearchBar component */}
      <SearchBar />
    </div>
  );
};

export default HeroSection;
