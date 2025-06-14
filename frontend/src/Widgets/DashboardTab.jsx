import { useState } from "react";
import "./DashboardTab.css";
import logo from "../assets/logo.png";
import hitleer from "../assets/hitleer.jpg";
import { useStore } from "../GlobalVariables";

const DashboardTab = () => {
  const { widgetTab, setWidgetTab } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (tab) => {
    setWidgetTab(tab);
    scrollToTop();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-section navbar-left">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo clickable-logo"
            onClick={() => handleNavClick("home")}
          />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-section navbar-center desktop-only">
          <button className="nav-link" onClick={() => handleNavClick("home")}>
            Home
          </button>
          <input
            type="text"
            placeholder="Search products"
            className="search-input"
          />
        </div>
        <div className="navbar-section navbar-right desktop-only">
          <button className="nav-link" onClick={() => handleNavClick("shop")}>
            All Products
          </button>
          <button className="nav-link" onClick={() => handleNavClick("cart")}>
            <span className="material-symbols-rounded">shopping_cart</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-rounded">menu</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="nav-link" onClick={() => handleNavClick("home")}>
          Home
        </button>
        <button className="nav-link" onClick={() => handleNavClick("shop")}>
          All Products
        </button>
        <button className="nav-link" onClick={() => handleNavClick("cart")}>
          <span className="material-symbols-rounded">shopping_cart</span>
          Cart
        </button>
        <input
          type="text"
          placeholder="Search products"
          className="search-input mobile-search"
        />
      </div>

      {widgetTab === "home" && (
        <div className="welcome-main-row">
          <section className="welcome-section">
            <h1 className="welcome-title">Welcome on Vision Academy</h1>
            <h2 className="welcome-subtitle">Inventory</h2>
            <p className="welcome-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
              consectetur nisi, eu consectetur nisl nisi euismod nisi.
            </p>
            <div className="welcome-buttons">
              <button
                className="welcome-btn all-products-btn"
                onClick={() => handleNavClick("shop")}
              >
                All Products
              </button>
              <button
                className="welcome-btn cart-btn"
                onClick={() => handleNavClick("cart")}
              >
                Cart
              </button>
            </div>
          </section>
          <div className="welcome-image-container">
            <img
              src={hitleer}
              alt="Vision Academy"
              className="welcome-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardTab;
