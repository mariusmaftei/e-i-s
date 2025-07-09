import ProviderServiceOfferForm from "../../components/UI/ProviderServiceOfferForm/ProviderServiceOfferForm";
import styles from "./ProvidersPage.module.css";
import HeroSection from "../../components/layout/Sections/HeroSection/HeroSection";

import ServiceProviderOfficeImage from "../../assets/images/eis-team-images/service-provider-office-image.webp";
import ElectricianIcon from "../../assets/images/illustration/electrician-image.png";
import PlumberIcon from "../../assets/images/illustration/plumber-image.png";
import WelderIcon from "../../assets/images/illustration/welder-image.png";

const ProvidersPage = () => {
  const popularServiceIcons = [
    {
      icon: (
        <img
          src={ElectricianIcon}
          alt="Electrician"
          className={styles.serviceIconImage}
        />
      ),
      text: "Electrician",
    },
    {
      icon: (
        <img
          src={PlumberIcon}
          alt="Plumber"
          className={styles.serviceIconImage}
        />
      ),
      text: "Instalator",
    },
    {
      icon: (
        <img
          src={WelderIcon}
          alt="Welder"
          className={styles.serviceIconImage}
        />
      ),
      text: "Sudor",
    },
  ];

  return (
    <div className={styles.serviceProviderPage}>
      <HeroSection
        badgeText="Devino Prestator"
        title="Ești profesionist?"
        highlightText="Alătură-te platformei noastre!"
        description="Alătură-te rețelei noastre de profesioniști și găsește clienți noi în zona ta. Completează formularul de mai jos pentru a începe!"
        imageSrc={ServiceProviderOfficeImage}
        popularServicesSection={{
          title: "Presteaza Servicii",
          icons: popularServiceIcons,
        }}
        className={styles.shortHero}
      />
      <ProviderServiceOfferForm className={styles.formOverlap} />{" "}
    </div>
  );
};

export default ProvidersPage;
