import { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { X, ChevronDown, ChevronUp, Search } from "lucide-react";
import { useServiceContext } from "../../../context/ServiceContext";
import { createPortal } from "react-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const inputContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Utilizăm contextul pentru a accesa și manipula serviciile selectate
  const { selectedServices, addService, removeService, performSearch } =
    useServiceContext();

  // Lista de servicii populare
  const popularServices = [
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
  ];

  // Setăm isMounted la true după ce componenta este montată
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Actualizăm poziția dropdown-ului când se deschide
  useEffect(() => {
    if (isDropdownOpen && inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isDropdownOpen]);

  // Închide dropdown-ul când se face click în afara lui
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    performSearch(); // Actualizăm starea pentru a indica că s-a efectuat o căutare
    console.log(
      "Căutare pentru:",
      selectedServices.length > 0 ? selectedServices : searchTerm
    );

    // Scroll către secțiunea de servicii populare
    const servicesSection = document.getElementById("servicii-populare");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddService = (service) => {
    addService(service);
    setSearchTerm("");
    setIsDropdownOpen(false);
  };

  const filteredServices = popularServices.filter(
    (service) =>
      service.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedServices.includes(service)
  );

  // Folosim createPortal pentru a randa dropdown-ul direct în body
  const renderDropdown = () => {
    if (!isDropdownOpen || !isMounted) return null;

    // Determinăm dacă suntem pe un dispozitiv mobil
    const isMobile = window.innerWidth < 768;

    return createPortal(
      <div
        ref={dropdownRef}
        className={styles.dropdownPortal}
        style={{
          position: "absolute",
          top: `${dropdownPosition.top}px`,
          left: isMobile
            ? `${dropdownPosition.left}px`
            : `${dropdownPosition.left}px`,
          width: isMobile
            ? `${dropdownPosition.width}px`
            : `${dropdownPosition.width}px`,
          zIndex: 9999,
        }}
      >
        <div className={styles.dropdownHeader}>
          <span>Servicii populare</span>
        </div>
        {filteredServices.length > 0 ? (
          <ul className={styles.servicesList}>
            {filteredServices.map((service) => (
              <li
                key={service}
                className={styles.serviceItem}
                onClick={() => handleAddService(service)}
              >
                {service}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noResults}>
            Nu s-au găsit servicii care să corespundă căutării
          </div>
        )}
      </div>,
      document.body
    );
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <div className={styles.searchInputWrapper}>
          <label htmlFor="search" className={styles.searchLabel}>
            Ce serviciu cauți?
          </label>
          <div ref={inputContainerRef} className={styles.searchInputContainer}>
            <div className={styles.selectedServicesTags}>
              {selectedServices.map((service) => (
                <div key={service} className={styles.serviceTag}>
                  <span>{service}</span>
                  <button
                    type="button"
                    onClick={() => removeService(service)}
                    className={styles.removeTag}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <input
                type="text"
                id="search"
                placeholder={
                  selectedServices.length > 0
                    ? "Adaugă alt serviciu..."
                    : "ex. Electrician, Instalator, Mecanic Auto"
                }
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={() => setIsDropdownOpen(true)}
              />
            </div>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>

          {renderDropdown()}
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.searchButton}>
            <Search size={18} className={styles.searchIcon} />
            Caută
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
