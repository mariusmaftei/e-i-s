import HeroSection from "../../components/layout/Sections/HeroSection/HeroSection";
import Categories from "../../components/layout/Sections/Categories/Categories";
import styles from "./ServicesPage.module.css";
import { ServiceProvider } from "../../context/ServiceContext";
import BecomeProviderCard from "../../components/layout/Sections/BecomeProviderCard/BecomeProviderCard";
import EISTeamImage from "../../assets/images/eis_team.png";

const ServicePage = () => {
  const popularServiceIcons = [
    { icon: "⚡", text: "Electrician" },
    { icon: "🔧", text: "Instalator" },
    { icon: "💥", text: "Sudor" },
  ];

  return (
    <ServiceProvider>
      <div className={styles.homePage}>
        <HeroSection
          badgeText="Servicii profesionale în toată România"
          title="Tu ceri. Noi găsim."
          highlightText="Simplu."
          description="Nu mai pierde timp căutând. Spune-ne ce ai nevoie și îți aducem specialiștii potriviți în cel mai scurt timp."
          imageSrc={EISTeamImage}
          popularServicesSection={{
            title: "Servicii Populare",
            icons: popularServiceIcons,
          }}
        />
        <Categories />
        <BecomeProviderCard />
      </div>
    </ServiceProvider>
  );
};

export default ServicePage;
