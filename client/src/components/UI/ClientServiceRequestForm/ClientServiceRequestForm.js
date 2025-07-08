"use client";

import { useState } from "react";
import styles from "./ClientServiceRequestForm.module.css";

const ClientServiceRequestForm = ({ serviceSubject = "" }) => {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    localitate: "",
    telefon: "",
    email: "",
    subiect: serviceSubject,
    descriereServiciu: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formular trimis:", formData);
    alert("Formularul a fost trimis cu succes! Vă vom contacta în curând.");
    // Aici poți adăuga logica de trimitere a datelor către un API
    setFormData({
      nume: "",
      prenume: "",
      localitate: "",
      telefon: "",
      email: "",
      subiect: serviceSubject,
      descriereServiciu: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Solicită un Serviciu</h2>
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

        <div className={styles.formGroup}>
          <label htmlFor="localitate" className={styles.label}>
            Localitate:
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
              Selectează o localitate
            </option>
            {romanianCounties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
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
          <label htmlFor="subiect" className={styles.label}>
            Subiect:
          </label>
          <input
            type="text"
            id="subiect"
            name="subiect"
            value={formData.subiect}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="descriereServiciu" className={styles.label}>
            Descriere Serviciu Dorit:
          </label>
          <textarea
            id="descriereServiciu"
            name="descriereServiciu"
            value={formData.descriereServiciu}
            onChange={handleChange}
            className={styles.textarea}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Trimite Solicitarea
        </button>
      </form>
    </div>
  );
};

export default ClientServiceRequestForm;
