"use client";

import CategoryCard from "../../../UI/CategoryCard/CategoryCard";
import styles from "./Categories.module.css";
import { Paintbrush, Filter, X } from "lucide-react";
import { useServiceContext } from "../../../../context/ServiceContext";
import ElectricianImage from "../../../../assets/images/electrician.jpg";
import MechanicAutoImage from "../../../../assets/images/mecanicauto.jpg";
import InstalatorImage from "../../../../assets/images/instalator.jpg";
import TamplarImage from "../../../../assets/images/tamplar.jpg";
import CurațenieImage from "../../../../assets/images/curatenie.jpg";
import ZugravImage from "../../../../assets/images/zugrav.jpg";

const Categories = () => {
  const { filterServices, searchPerformed, clearServices } =
    useServiceContext();

  const allCategories = [
    {
      id: 1,
      name: "Electrician",
      icon: "⚡",
      description: "Reparații și instalații electrice",
      count: 48,
      backgroundImage: ElectricianImage,
    },
    {
      id: 2,
      name: "Mecanic Auto",
      icon: "🔧",
      description: "Reparații și întreținere auto",
      count: 36,
      backgroundImage: MechanicAutoImage,
    },
    {
      id: 3,
      name: "Instalator",
      icon: "🚿",
      description: "Servicii și reparații de instalații",
      count: 52,
      backgroundImage: InstalatorImage,
    },
    {
      id: 4,
      name: "Tâmplar",
      icon: "🪚",
      description: "Lucrări în lemn și reparații mobilier",
      count: 29,
      backgroundImage: TamplarImage,
    },
    {
      id: 5,
      name: "Curățenie",
      icon: "🧹",
      description: "Curățenie pentru case și birouri",
      count: 64,
      backgroundImage: CurațenieImage,
    },
    {
      id: 6,
      name: "Zugrav",
      icon: <Paintbrush size={24} />,
      description: "Zugrăveli interioare și exterioare",
      count: 31,
      backgroundImage: ZugravImage,
    },
  ];

  // Filtrăm categoriile dacă s-a efectuat o căutare și există servicii pentru filtrare
  // Acum folosim filterServices în loc de selectedServices
  const categories =
    searchPerformed && filterServices.length > 0
      ? allCategories.filter((category) =>
          filterServices.some(
            (service) => category.name.toLowerCase() === service.toLowerCase()
          )
        )
      : allCategories;

  return (
    <section
      id="servicii-populare"
      className={`${styles.section} container mx-auto`}
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>EXPLOREAZĂ CATEGORII</span>
          <h2 className={styles.title}>
            {searchPerformed && filterServices.length > 0
              ? "Servicii filtrate"
              : "Servicii populare"}
          </h2>
        </div>

        <div className="flex items-center">
          {searchPerformed && filterServices.length > 0 && (
            <div className={styles.filterInfo}>
              <Filter size={16} className="mr-1" />
              <span>Filtrat: {filterServices.join(", ")}</span>
              <button
                onClick={clearServices}
                className={styles.clearFilter}
                title="Șterge filtrele"
              >
                <X size={16} />
              </button>
            </div>
          )}
          <a href="#" className={styles.viewAll}>
            Vezi toate categoriile
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
      </div>

      {categories.length > 0 ? (
        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>Nu s-au găsit servicii care să corespundă căutării.</p>
          <button onClick={clearServices} className={styles.resetButton}>
            Resetează filtrele
          </button>
        </div>
      )}
    </section>
  );
};

export default Categories;
