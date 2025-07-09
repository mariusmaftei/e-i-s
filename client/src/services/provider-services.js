import api from "./api.js";

export const providerServices = {
  sendProviderRegistration: async (formData) => {
    try {
      const response = await api.post("/provider", formData);
      return {
        success: true,
        data: response.data,
        message:
          response.data.message || "Înregistrarea a fost trimisă cu succes!",
      };
    } catch (error) {
      console.error("Error sending provider registration:", error);

      if (error.response) {
        return {
          success: false,
          message:
            error.response.data.message ||
            "A apărut o eroare la trimiterea înregistrării.",
          status: error.response.status,
        };
      } else if (error.request) {
        return {
          success: false,
          message:
            "Nu s-a putut conecta la server. Verificați conexiunea la internet.",
        };
      } else {
        return {
          success: false,
          message:
            "A apărut o eroare neașteptată. Vă rugăm să încercați din nou.",
        };
      }
    }
  },

  validateProviderForm: (formData) => {
    const errors = {};

    if (!formData.nume || formData.nume.trim().length < 2) {
      errors.nume = "Numele trebuie să conțină cel puțin 2 caractere";
    }

    if (!formData.prenume || formData.prenume.trim().length < 2) {
      errors.prenume = "Prenumele trebuie să conțină cel puțin 2 caractere";
    }

    if (!formData.localitate) {
      errors.localitate = "Vă rugăm să selectați o localitate";
    }

    if (!formData.telefon) {
      errors.telefon = "Numărul de telefon este obligatoriu";
    } else {
      const phoneRegex = /^(\+40|0040|0)[0-9]{9}$/;
      if (!phoneRegex.test(formData.telefon.replace(/\s/g, ""))) {
        errors.telefon =
          "Numărul de telefon nu este valid (format: 0XXXXXXXXX)";
      }
    }

    if (!formData.email) {
      errors.email = "Adresa de email este obligatorie";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Adresa de email nu este validă";
      }
    }

    if (
      !formData.serviciiOferite ||
      !Array.isArray(formData.serviciiOferite) ||
      formData.serviciiOferite.length === 0
    ) {
      errors.serviciiOferite = "Vă rugăm să selectați cel puțin un serviciu";
    }

    if (
      !formData.descriereExperienta ||
      formData.descriereExperienta.trim().length < 20
    ) {
      errors.descriereExperienta =
        "Descrierea experienței trebuie să conțină cel puțin 20 de caractere";
    }

    if (
      !formData.disponibilitate ||
      formData.disponibilitate.trim().length < 5
    ) {
      errors.disponibilitate =
        "Vă rugăm să specificați disponibilitatea (ex: Luni-Vineri, 9:00-17:00)";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },

  getAvailableServices: () => {
    return [
      "Electrician",
      "Instalator",
      "Mecanic Auto",
      "Tâmplar",
      "Zugrav",
      "Curățenie",
      "Grădinar",
      "Montaj Mobilă",
      "Reparații Electrocasnice",
      "Transport",
      "Reparații IT",
      "Masaj",
      "Coafor",
      "Fotograf",
      "DJ/Muzică",
      "Catering",
      "Traduceri",
      "Contabilitate",
      "Consultanță",
      "Design Grafic",
    ];
  },
};

export default providerServices;
