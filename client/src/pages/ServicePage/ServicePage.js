import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProviderCard from "../../components/UI/ProviderCard/ProviderCard";
import styles from "./ServicePage.module.css";

const ServicePage = () => {
  const { category } = useParams();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulăm încărcarea datelor
  useEffect(() => {
    setLoading(true);
    // Simulăm un delay pentru a arăta loading state
    setTimeout(() => {
      // Date dummy pentru prestatori în funcție de categorie
      const dummyProviders = getDummyProviders(category);
      setProviders(dummyProviders);
      setLoading(false);
    }, 500);
  }, [category]);

  // Funcție pentru a obține date dummy în funcție de categorie
  const getDummyProviders = (category) => {
    // Bază de date dummy cu prestatori pentru fiecare categorie
    const allProviders = {
      electrician: [
        {
          id: 1,
          name: "Alexandru Popescu",
          company: "ElectroServ SRL",
          location: "București",
          rating: 4.8,
          reviews: 124,
          price: "50-80 lei/oră",
          image:
            "https://austincareerinstitute.edu/wp-content/uploads/2023/01/electrical-tech-scaled.jpg",
          description:
            "Specialist în instalații electrice cu peste 10 ani de experiență. Reparații, instalații noi, verificări.",
          verified: true,
        },
        {
          id: 2,
          name: "Mihai Ionescu",
          company: "ElectroFix",
          location: "Brașov",
          rating: 4.7,
          reviews: 98,
          price: "45-75 lei/oră",
          image:
            "https://texelectrical.com/wp-content/uploads/2018/09/electrian.jpg",
          description:
            "Electrician autorizat ANRE. Servicii de calitate pentru locuințe și spații comerciale.",
          verified: true,
        },
        {
          id: 3,
          name: "Cristina Dumitrescu",
          company: "ElectroPro",
          location: "Cluj-Napoca",
          rating: 4.9,
          reviews: 156,
          price: "55-90 lei/oră",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KvOnlxNb02no1KwZ6uOWv7lyFxb0rN_hcZzzLdcyRdCXmMNIuzDIbT3fYFi7XcJCiZA&usqp=CAU",
          description:
            "Specializată în instalații electrice moderne și sisteme smart home.",
          verified: true,
        },
        {
          id: 4,
          name: "Radu Stanescu",
          company: "RDS Electric",
          location: "Timișoara",
          rating: 4.6,
          reviews: 87,
          price: "40-70 lei/oră",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlswBV76PyZW7NfwiBSMy1yk667aAcQc_XsKfPuN8ZwWMLuk_PJDZSKAGQKua6g6Vdd4&usqp=CAU",
          description:
            "Servicii complete de electricitate pentru case și apartamente.",
          verified: false,
        },
      ],
      "mecanic-auto": [
        {
          id: 1,
          name: "Vasile Marin",
          company: "AutoMecanica",
          location: "București",
          rating: 4.9,
          reviews: 210,
          price: "60-100 lei/oră",
          image:
            "https://fundatiaapt.ro/wp-content/uploads/mecanic-auto-fundatia-apt-international-cursuri-perfectionare.webp",
          description:
            "Mecanic auto cu experiență în reparații pentru toate mărcile. Specializat în diagnosticare electronică.",
          verified: true,
        },
        {
          id: 2,
          name: "Ion Gheorghe",
          company: "MasterAuto",
          location: "Constanța",
          rating: 4.7,
          reviews: 175,
          price: "55-90 lei/oră",
          image:
            "https://serviceautononstopbrasov.ro/wp-content/uploads/2019/04/mecanica-auto-1.jpg",
          description:
            "Servicii complete de mecanică auto, specializat în mașini germane.",
          verified: true,
        },
        {
          id: 3,
          name: "Andrei Popa",
          company: "AutoFix Garage",
          location: "Brașov",
          rating: 4.8,
          reviews: 132,
          price: "50-85 lei/oră",
          image:
            "https://autoblog.md/wp-content/uploads/2024/04/trusted-mechanic.jpg",
          description:
            "Reparații rapide și de calitate. Piese originale și aftermarket.",
          verified: true,
        },
      ],
      instalator: [
        {
          id: 1,
          name: "Marian Dinu",
          company: "InstalPro",
          location: "București",
          rating: 4.9,
          reviews: 156,
          price: "55-90 lei/oră",
          image:
            "https://cardinals.ro/wp-content/uploads/2019/01/curs-instalator-bucuresti.jpg",
          description:
            "Instalator profesionist pentru sisteme sanitare, termice și de gaz. Autorizat ANRE.",
          verified: true,
        },
        {
          id: 2,
          name: "George Vasilescu",
          company: "AquaServ",
          location: "Iași",
          rating: 4.8,
          reviews: 142,
          price: "50-85 lei/oră",
          image:
            "https://firme-instalatii-sanitare.ro/wp-content/uploads/2022/01/Instalator-sector-2-Bucuresti-768x512.jpg",
          description:
            "Specializat în instalații sanitare și termice. Intervenții rapide.",
          verified: true,
        },
        {
          id: 3,
          name: "Elena Matei",
          company: "InstalExpert",
          location: "Cluj-Napoca",
          rating: 4.7,
          reviews: 98,
          price: "45-80 lei/oră",
          image:
            "https://instalator-urgent.ro/wp-content/uploads/2022/02/Instalator-non-stop-sector-1-Bucuresti.jpg",
          description:
            "Servicii complete de instalații pentru locuințe și spații comerciale.",
          verified: false,
        },
      ],
      tamplar: [
        {
          id: 1,
          name: "Florin Toma",
          company: "LemnArt",
          location: "București",
          rating: 4.8,
          reviews: 87,
          price: "45-75 lei/oră",
          image:
            "https://cms.europa.jobs/wp-content/uploads/2021/06/tamplar-4-1030x687.jpg",
          description:
            "Tâmplar cu experiență în mobilier la comandă și restaurări.",
          verified: true,
        },
        {
          id: 2,
          name: "Nicolae Barbu",
          company: "MobilaDeco",
          location: "Brașov",
          rating: 4.9,
          reviews: 112,
          price: "50-90 lei/oră",
          image:
            "https://dorathebot.ro/assets/img/professions/thumbs/1_1_w1200_h630_c.jpg?v=1635328387",
          description:
            "Specialist în mobilier din lemn masiv și PAL melaminat.",
          verified: true,
        },
      ],
      curatenie: [
        {
          id: 1,
          name: "Maria Iancu",
          company: "CleanHome",
          location: "București",
          rating: 4.7,
          reviews: 145,
          price: "30-50 lei/oră",
          image: "https://via.placeholder.com/300x300?text=Maria+I",
          description:
            "Servicii profesionale de curățenie pentru case și apartamente.",
          verified: true,
        },
        {
          id: 2,
          name: "Ana Popescu",
          company: "EcoCleaning",
          location: "Cluj-Napoca",
          rating: 4.8,
          reviews: 132,
          price: "35-55 lei/oră",
          image:
            "https://shinyqueen.ro/wp-content/uploads/2024/01/1_ulIIG4tM8OtkV2ED73ExdQ.webp",
          description:
            "Curățenie ecologică cu produse bio pentru toate tipurile de spații.",
          verified: true,
        },
      ],
      zugrav: [
        {
          id: 1,
          name: "Dumitru Ene",
          company: "ColorHome",
          location: "București",
          rating: 4.8,
          reviews: 98,
          price: "40-70 lei/oră",
          image:
            "https://www.terrainstal.ro/wp-content/uploads/2022/01/zugrav-bucuresti.jpg",
          description:
            "Zugrav cu experiență în finisaje interioare și exterioare.",
          verified: true,
        },
        {
          id: 2,
          name: "Sorin Munteanu",
          company: "ArtDecor",
          location: "Timișoara",
          rating: 4.9,
          reviews: 124,
          price: "45-80 lei/oră",
          image:
            "https://cdn.armut.com/images/services/00032-boyaci-boya-badana-ustasi.jpg?v=1745390437329",
          description:
            "Specialist în zugrăveli decorative și tencuieli ornamentale.",
          verified: true,
        },
      ],
    };

    // Convertim categoria din URL în formatul din baza de date
    const normalizedCategory = category.toLowerCase().replace(/\s+/g, "-");

    // Returnăm prestatorii pentru categoria specificată sau un array gol dacă nu există
    return allProviders[normalizedCategory] || [];
  };

  // Funcție pentru a formata numele categoriei pentru afișare
  const formatCategoryName = (category) => {
    if (!category) return "";

    // Înlocuim cratimele cu spații și capitalizăm prima literă
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Prestatori de servicii:{" "}
            <span className={styles.categoryName}>
              {formatCategoryName(category)}
            </span>
          </h1>
          <p className={styles.description}>
            Găsește cei mai buni prestatori de servicii din categoria{" "}
            {formatCategoryName(category)} din zona ta.
          </p>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Se încarcă prestatorii...</p>
          </div>
        ) : providers.length > 0 ? (
          <div className={styles.providersGrid}>
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>Nu am găsit prestatori pentru această categorie.</p>
            <a href="/" className={styles.backButton}>
              Înapoi la pagina principală
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
