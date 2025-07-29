"use client";

import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { ArrowRight, CheckCircle } from "lucide-react";
import WorkersImage from "../../assets/images/eis-team-images/workers-home-image.webp";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRequestService = () => {
    navigate("/solicita-serviciu");
  };

  const handleBecomeProvider = () => {
    navigate("/devino-prestator");
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          {/* Phone Section at Top */}
          <div className={styles.phoneSection}>
            <h3 className={styles.phoneMessage}>Sună Acum!</h3>
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
              <a href="tel:0735520999" className={styles.phoneNumber}>
                0735 520 999
              </a>
            </div>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Găsește{" "}
                <span className={styles.highlight}>specialiștii potriviți</span>{" "}
                pentru orice serviciu
              </h1>
              <p className={styles.heroDescription}>
                Conectăm clienții cu profesioniști verificați din toată România.
                Simplu, rapid și sigur.
              </p>
              <div className={styles.heroButtons}>
                <button
                  onClick={handleRequestService}
                  className={styles.primaryButton}
                >
                  Caut un specialist
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={handleBecomeProvider}
                  className={styles.secondaryButton}
                >
                  Sunt specialist
                </button>
              </div>

              {/* Trust Signals moved under buttons */}
              <div className={styles.trustSignals}>
                <div className={styles.trustItem}>
                  <CheckCircle size={16} />
                  <span>Profesioniști verificați</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle size={16} />
                  <span>Răspuns în 24h</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle size={16} />
                  <span>In toată Tara</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle size={16} />
                  <span>Suport complet</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src={WorkersImage || "/placeholder.svg"}
                alt="Echipa de specialiști"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorksSection}>
        <div className={styles.stepsContainer}>
          <h2 className={styles.sectionTitle}>Cum funcționează?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Spune-ne ce ai nevoie</h3>
              <p className={styles.stepDescription}>
                Completează formularul cu detaliile serviciului dorit
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Te contactăm</h3>
              <p className={styles.stepDescription}>
                Îți găsim specialiștii potriviți și te contactăm rapid
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Problema rezolvată</h3>
              <p className={styles.stepDescription}>
                Lucrezi direct cu specialistul pentru a-ți rezolva problema
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
