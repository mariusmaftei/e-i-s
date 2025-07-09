import { useState } from "react";
import styles from "./ProviderServiceOfferForm.module.css";
import ServiceSelectionInput from "../../layout/Sections/ServiceSelectionInput/ServiceSelectionInput";
import { providerServices } from "../../../services/provider-services";

const ProviderServiceOfferForm = () => {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    localitate: "",
    telefon: "",
    email: "",
    serviciiOferite: [],
    descriereExperienta: "",
    disponibilitate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

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

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleServicesChange = (newServices) => {
    setFormData((prevData) => ({
      ...prevData,
      serviciiOferite: newServices,
    }));

    if (formErrors.serviciiOferite) {
      setFormErrors((prev) => ({
        ...prev,
        serviciiOferite: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setFormErrors({});

    const validation = providerServices.validateProviderForm(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setIsSubmitting(false);
      setSubmitMessage("Vă rugăm să corectați erorile din formular.");
      return;
    }

    try {
      const result = await providerServices.sendProviderRegistration(formData);

      if (result.success) {
        setSubmitMessage(result.message);
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
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "A apărut o eroare neașteptată. Vă rugăm să încercați din nou."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Înregistrează-te ca Prestator</h2>

      {submitMessage && (
        <div
          className={`${styles.message} ${
            submitMessage.includes("succes") ? styles.success : styles.error
          }`}
        >
          {submitMessage}
        </div>
      )}

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
              className={`${styles.input} ${
                formErrors.nume ? styles.inputError : ""
              }`}
              required
            />
            {formErrors.nume && (
              <span className={styles.errorText}>{formErrors.nume}</span>
            )}
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
              className={`${styles.input} ${
                formErrors.prenume ? styles.inputError : ""
              }`}
              required
            />
            {formErrors.prenume && (
              <span className={styles.errorText}>{formErrors.prenume}</span>
            )}
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
              className={`${styles.input} ${
                formErrors.telefon ? styles.inputError : ""
              }`}
              placeholder="0XXXXXXXXX"
              required
            />
            {formErrors.telefon && (
              <span className={styles.errorText}>{formErrors.telefon}</span>
            )}
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
              className={`${styles.input} ${
                formErrors.email ? styles.inputError : ""
              }`}
              required
            />
            {formErrors.email && (
              <span className={styles.errorText}>{formErrors.email}</span>
            )}
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
            className={`${styles.input} ${
              formErrors.localitate ? styles.inputError : ""
            }`}
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
          {formErrors.localitate && (
            <span className={styles.errorText}>{formErrors.localitate}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <ServiceSelectionInput
            id="serviciiOferite"
            name="serviciiOferite"
            label="Ce servicii doriți să prestați?"
            placeholder="Ex: Electrician, Instalator, Zugrav"
            selectedServices={formData.serviciiOferite}
            onServicesChange={handleServicesChange}
            availableServices={providerServices.getAvailableServices()}
            required={true}
          />
          {formErrors.serviciiOferite && (
            <span className={styles.errorText}>
              {formErrors.serviciiOferite}
            </span>
          )}
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
            className={`${styles.textarea} ${
              formErrors.descriereExperienta ? styles.inputError : ""
            }`}
            rows="5"
            placeholder="Descrie experiența ta, calificările și ce te face un profesionist de încredere."
            required
          ></textarea>
          {formErrors.descriereExperienta && (
            <span className={styles.errorText}>
              {formErrors.descriereExperienta}
            </span>
          )}
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
            className={`${styles.textarea} ${
              formErrors.disponibilitate ? styles.inputError : ""
            }`}
            rows="3"
            placeholder="Ex: Luni-Vineri, 9:00-17:00; Sâmbătă, 10:00-14:00"
            required
          ></textarea>
          {formErrors.disponibilitate && (
            <span className={styles.errorText}>
              {formErrors.disponibilitate}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Se înregistrează..."
            : "Înregistrează-te ca Prestator"}
        </button>
      </form>
    </div>
  );
};

export default ProviderServiceOfferForm;
