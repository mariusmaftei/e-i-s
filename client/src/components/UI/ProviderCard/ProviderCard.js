import { Star, MapPin, CheckCircle, Clock, Phone } from "lucide-react";
import styles from "./ProviderCard.module.css";

const ProviderCard = ({ provider }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={provider.image || "/placeholder.svg"}
          alt={provider.name}
          className={styles.image}
        />
        {provider.verified && (
          <div className={styles.verifiedBadge}>
            <CheckCircle size={16} className={styles.verifiedIcon} />
            <span>Verificat</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{provider.name}</h3>
        <p className={styles.company}>{provider.company}</p>

        <div className={styles.location}>
          <MapPin size={16} className={styles.locationIcon} />
          <span>{provider.location}</span>
        </div>

        <div className={styles.rating}>
          <div className={styles.ratingBadge}>
            <Star size={16} className={styles.ratingIcon} />
            <span className={styles.ratingValue}>{provider.rating}</span>
          </div>
          <span className={styles.reviews}>({provider.reviews} recenzii)</span>
        </div>

        <p className={styles.description}>{provider.description}</p>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Tarif:</span>
            <span className={styles.priceValue}>{provider.price}</span>
          </div>

          <div className={styles.actions}>
            <button className={styles.contactButton}>
              <Phone size={16} className={styles.contactIcon} />
              <span>Contact</span>
            </button>
            <button className={styles.scheduleButton}>
              <Clock size={16} className={styles.scheduleIcon} />
              <span>Programare</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
