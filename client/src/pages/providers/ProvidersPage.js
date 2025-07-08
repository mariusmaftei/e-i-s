"use client";
import ClientServiceRequestForm from "../../components/UI/ClientServiceRequestForm/ClientServiceRequestForm";
import styles from "./ProvidersPage.module.css";
import OfficeRegisterImage from "../../assets/images/eis-team-images/office-service-rpivder.png";
import HeroSection from "../../components/layout/Sections/HeroSection/HeroSection";

const ProvidersPage = () => {
  const popularServiceIcons = [
    { icon: "⚡", text: "Electrician" },
    { icon: "🔧", text: "Instalator" },
    { icon: "💥", text: "Sudor" },
  ];

  return (
    <div className={styles.serviceProviderPage}>
      <HeroSection
        badgeText="Devino Prestator"
        title="Ești profesionist?"
        highlightText="Alătură-te platformei noastre!"
        description="Alătură-te rețelei noastre de profesioniști și găsește clienți noi în zona ta. Completează formularul de mai jos pentru a începe!"
        imageSrc={OfficeRegisterImage}
        popularServicesSection={{
          title: "Presteaza Servicii",
          icons: popularServiceIcons,
        }}
      />
      <ClientServiceRequestForm />
    </div>
  );
};

export default ProvidersPage;
