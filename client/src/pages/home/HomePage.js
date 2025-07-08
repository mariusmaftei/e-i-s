import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import WorkersImage from "../../assets/images/eis-team-images/workers-home-image.png";
import OfficeWomanImage from "../../assets/images/eis-team-images/office-woman-homepage.png";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Left Side - Service Providers */}
      <div className={styles.leftSide}>
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
              src={WorkersImage || "/placeholder.svg"}
              alt="Profesioniști în construcții"
              className={styles.sideImage}
            />
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            {/* New wrapper for centering the button */}
            <Link to="/devino-prestator" className={styles.buttonProvider}>
              Solicită un specialist
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Clients */}
      <div className={styles.rightSide}>
        <div className={styles.sideContent}>
          <h2 className={styles.sideTitle}>
            Ești specialist și cauți clienți?
          </h2>
          <p className={styles.sideDescription}>
            Alătură-te rețelei noastre și găsește ușor clienți noi în zona ta.
          </p>
          <div className={styles.imageWrapper}>
            <img
              src={OfficeWomanImage || "/placeholder.svg"}
              alt="Femeie de afaceri"
              className={styles.sideImage}
            />
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            {/* New wrapper for centering the button */}
            <Link to="/solicita-serviciu" className={styles.buttonClient}>
              Înscrie-te ca specialist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
