import api from "./api.js";

export const clientServices = {
  sendServiceRequest: async (formData) => {
    try {
      const response = await api.post("/client", formData);
      return {
        success: true,
        data: response.data,
        message:
          response.data.message || "Solicitarea a fost trimisă cu succes!",
      };
    } catch (error) {
      console.error("Error sending client service request:", error);

      if (error.response) {
        return {
          success: false,
          message:
            error.response.data.message ||
            "A apărut o eroare la trimiterea solicitării.",
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

  validateClientForm: (formData) => {
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

    if (!formData.subiect || formData.subiect.trim().length < 3) {
      errors.subiect = "Subiectul trebuie să conțină cel puțin 3 caractere";
    }

    if (
      !formData.descriereServiciu ||
      formData.descriereServiciu.trim().length < 10
    ) {
      errors.descriereServiciu =
        "Descrierea serviciului trebuie să conțină cel puțin 10 caractere";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },
};

export default clientServices;
