import { Star } from "react-feather";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ service }) => {
  return (
    <div
      className={`${styles.card} ${service.featured ? styles.featured : ""}`}
    >
      <div className={styles.imageContainer}>
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className={styles.image}
        />
        {service.featured && (
          <div className={styles.featuredBadge}>RECOMANDAT</div>
        )}
        <div className={styles.categoryOverlay}>
          <div className={styles.categoryBadge}>{service.category}</div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>

        <p className={styles.provider}>
          <svg
            className={styles.providerIcon}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
          </svg>
          {service.provider}
        </p>

        <div className={styles.rating}>
          <div className={styles.ratingBadge}>
            <Star className={styles.ratingIcon} />
            <span className={styles.ratingValue}>{service.rating}</span>
          </div>
          <span className={styles.reviews}>({service.reviews} recenzii)</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>{service.price}</span>
          <a href="#" className={styles.detailsButton}>
            Vezi Detalii
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
