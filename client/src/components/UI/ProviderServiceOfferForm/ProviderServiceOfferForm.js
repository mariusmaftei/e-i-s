import { useState } from "react";
import styles from "./ProviderServiceOfferForm.module.css";
import ServiceSelectionInput from "../../layout/Sections/ServiceSelectionInput/ServiceSelectionInput";

const ProviderServiceOfferForm = () => {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    localitate: "",
    telefon: "",
    email: "",
    serviciiOferite: [], // Acum va fi un array de servicii selectate
    descriereExperienta: "",
    disponibilitate: "",
  });

  const romanianCounties = [
    "Alba",
    "Arad",
    "Argeș",
    "Bacău",
    "Bihor",
    "Bistrița-Năsăud",
    "Botoșani",
    "Brașov",
    "Brăila",
    "București (municipiu cu statut de județ)",
    "Buzău",
    "Caraș-Severin",
    "Călărași",
    "Cluj",
    "Constanța",
    "Covasna",
    "Dâmbovița",
    "Dolj",
    "Galați",
    "Giurgiu",
    "Gorj",
    "Harghita",
    "Hunedoara",
    "Ialomița",
    "Iași",
    "Ilfov",
    "Maramureș",
    "Mehedinți",
    "Mureș",
    "Neamț",
    "Olt",
    "Prahova",
    "Sălaj",
    "Satu Mare",
    "Sibiu",
    "Suceava",
    "Teleorman",
    "Timiș",
    "Tulcea",
    "Vâlcea",
    "Vaslui",
    "Vrancea",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServicesChange = (newServices) => {
    setFormData((prevData) => ({
      ...prevData,
      serviciiOferite: newServices,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formular de înregistrare prestator trimis:", formData);
    alert(
      "Formularul de înregistrare a fost trimis cu succes! Vă vom contacta în curând."
    );
    // Aici poți adăuga logica de trimitere a datelor către un API
    setFormData({
      nume: "",
      prenume: "",
      localitate: "",
      telefon: "",
      email: "",
      serviciiOferite: [],
      descriereExperienta: "",
      disponibilitate: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Înregistrează-te ca Prestator</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="nume" className={styles.label}>
              Nume:
            </label>
            <input
              type="text"
              id="nume"
              name="nume"
              value={formData.nume}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="prenume" className={styles.label}>
              Prenume:
            </label>
            <input
              type="text"
              id="prenume"
              name="prenume"
              value={formData.prenume}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="telefon" className={styles.label}>
              Telefon:
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="localitate" className={styles.label}>
            Localitate (județ):
          </label>
          <select
            id="localitate"
            name="localitate"
            value={formData.localitate}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="" disabled>
              Selectează un județ
            </option>
            {romanianCounties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <ServiceSelectionInput
            id="serviciiOferite"
            name="serviciiOferite"
            label="Ce servicii doriți să prestați?"
            placeholder="Ex: Electrician, Instalator, Zugrav"
            selectedServices={formData.serviciiOferite}
            onServicesChange={handleServicesChange}
            required={true}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="descriereExperienta" className={styles.label}>
            Descriere Experiență și Calificări:
          </label>
          <textarea
            id="descriereExperienta"
            name="descriereExperienta"
            value={formData.descriereExperienta}
            onChange={handleChange}
            className={styles.textarea}
            rows="5"
            placeholder="Descrie experiența ta, calificările și ce te face un profesionist de încredere."
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="disponibilitate" className={styles.label}>
            Disponibilitate (zile și ore):
          </label>
          <textarea
            id="disponibilitate"
            name="disponibilitate"
            value={formData.disponibilitate}
            onChange={handleChange}
            className={styles.textarea}
            rows="3"
            placeholder="Ex: Luni-Vineri, 9:00-17:00; Sâmbătă, 10:00-14:00"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Înregistrează-te ca Prestator
        </button>
      </form>
    </div>
  );
};

export default ProviderServiceOfferForm;
