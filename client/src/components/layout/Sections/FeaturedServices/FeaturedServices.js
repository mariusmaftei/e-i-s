import ServiceCard from "../../../UI/ServiceCard/ServiceCard";
import styles from "./FeaturedServices.module.css";
import ElectricianImage from "../../../../assets/images/pro-electrician.jpg";
import MechanicImage from "../../../../assets/images/pro-mecanic.jpg";
import PlumberImage from "../../../../assets/images/pro-instalator.jpg";
import CarpenterImage from "../../../../assets/images/pro-tamplar.jpg";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Instalații Electrice & Reparații",
      provider: "ElectroServ SRL",
      rating: 4.8,
      reviews: 124,
      price: "50-80 lei/oră",
      image: ElectricianImage,
      category: "Electrician",
      featured: true,
    },
    {
      id: 2,
      title: "Reparații Motor & Diagnosticare",
      provider: "AutoMecanica",
      rating: 4.7,
      reviews: 98,
      price: "60-100 lei/oră",
      image: MechanicImage,
      category: "Mecanic Auto",
    },
    {
      id: 3,
      title: "Instalații Sanitare & Reparații",
      provider: "InstalPro",
      rating: 4.9,
      reviews: 156,
      price: "55-90 lei/oră",
      image: PlumberImage,
      category: "Instalator",
      featured: true,
    },
    {
      id: 4,
      title: "Mobilier la Comandă & Reparații",
      provider: "LemnArt",
      rating: 4.6,
      reviews: 87,
      price: "45-75 lei/oră",
      image: CarpenterImage,
      category: "Tâmplar",
    },
  ];

  return (
    <section className={`${styles.section} container mx-auto`}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>SERVICII DE TOP</span>
          <h2 className={styles.title}>Profesioniști recomandați</h2>
        </div>
        <a href="#" className={styles.viewAll}>
          Vezi toate serviciile
          <svg
            className={styles.viewAllIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
