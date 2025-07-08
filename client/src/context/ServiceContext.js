"use client";

import { createContext, useState, useContext } from "react";

// Crearea contextului
const ServiceContext = createContext();

// Hook personalizat pentru a utiliza contextul
export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      "useServiceContext trebuie utilizat în interiorul unui ServiceProvider"
    );
  }
  return context;
};

// Provider component
export const ServiceProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState([]); // Servicii selectate în dropdown
  const [filterServices, setFilterServices] = useState([]); // Servicii folosite pentru filtrare
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Funcții pentru manipularea serviciilor selectate
  const addService = (service) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((s) => s !== service));
  };

  const clearServices = () => {
    setSelectedServices([]);
    setFilterServices([]);
    setSearchPerformed(false);
  };

  // Funcție pentru a aplica filtrarea când se apasă butonul Caută
  const performSearch = () => {
    setFilterServices([...selectedServices]); // Copiem serviciile selectate în lista de filtrare
    setSearchPerformed(true);
  };

  const value = {
    selectedServices,
    setSelectedServices,
    filterServices,
    searchPerformed,
    addService,
    removeService,
    clearServices,
    performSearch,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContext;
