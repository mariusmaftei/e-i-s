import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import WorkersImage from "../../assets/images/eis-team-images/workers-home-image.webp";
import OfficeWomanImage from "../../assets/images/eis-team-images/office-woman-homepage.webp";

const HomePage = () => {
  const [expandingSide, setExpandingSide] = useState(null);
  const navigate = useNavigate();

  const handleRequestSpecialistClick = () => {
    setExpandingSide("left");
    setTimeout(() => {
      navigate("/solicita-serviciu");
    }, 1000);
  };

  const handleRegisterSpecialistClick = () => {
    setExpandingSide("right");
    setTimeout(() => {
      navigate("/devino-prestator");
    }, 1000);
  };

  return (
    <div className={styles.homePage}>
      <div
        className={`${styles.leftSide} ${
          expandingSide === "left" ? styles.expand : ""
        } ${expandingSide === "right" ? styles.hide : ""}`}
      >
        <div className={styles.leftBackground}></div>

        <div className={styles.leftOverlay}></div>

        <div className={styles.sideContent}>
          <h2 className={styles.sideTitle}>
            Ai nevoie de un specialist in orice domeniu?
          </h2>
          <p className={styles.sideDescription}>
            Găsește rapid profesioniști pentru orice tip de serviciu de care ai
            nevoie.
          </p>
          <div className={styles.imageWrapper}>
            <img
              src={WorkersImage}
              alt="Profesioniști în construcții"
              className={styles.sideImage}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleRequestSpecialistClick}
              className={styles.buttonProvider}
            >
              Solicită un specialist
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.rightSide} ${
          expandingSide === "right" ? styles.expand : ""
        } ${expandingSide === "left" ? styles.hide : ""}`}
      >
        <div className={styles.rightBackground}></div>
        <div className={styles.rightOverlay}></div>

        <div className={styles.sideContent}>
          <h2 className={styles.sideTitle}>
            Ești specialist și cauți clienți?
          </h2>
          <p className={styles.sideDescription}>
            Alătură-te rețelei noastre și găsește ușor clienți noi în zona ta.
          </p>
          <div className={styles.imageWrapper}>
            <img
              src={OfficeWomanImage}
              alt="Femeie de afaceri"
              className={styles.sideImage}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleRegisterSpecialistClick}
              className={styles.buttonClient}
            >
              Înscrie-te ca specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
