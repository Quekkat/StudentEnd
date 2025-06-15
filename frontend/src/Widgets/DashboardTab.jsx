import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import "./DashboardTab.css";
import logo from "../assets/logo.png";
import hitleer from "../assets/hitleer.jpg";
import { useStore } from "../GlobalVariables";

const DashboardTab = () => {
  const { widgetTab, setWidgetTab, setAuthUser } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("xwpbbool");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (tab) => {
    setWidgetTab(tab);
    scrollToTop();
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setAuthUser(null);
    navigate("/login");
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
            onChange={(e) => {
              // Get the current store state
              const store = useStore.getState();
              // Update search query
              store.setSearchQuery(e.target.value);
              // Navigate to shop if not already there
              if (widgetTab !== "shop") {
                setWidgetTab("shop");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && widgetTab !== "shop") {
                setWidgetTab("shop");
              }
            }}
          />
        </div>

        {/* Right section with All Products, cart and logout buttons */}
        <div className="navbar-section navbar-right desktop-only">
          <button className="nav-link" onClick={() => handleNavClick("shop")}>
            All Products
          </button>
          <button className="nav-link" onClick={() => handleNavClick("cart")}>
            <span className="material-symbols-rounded">shopping_cart</span>
          </button>
          <button className="nav-link logout-btn" onClick={handleLogout}>
            <span className="material-symbols-rounded">logout</span>
            Logout
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

      {/* Mobile Menu - keep the same organization as desktop */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="nav-link" onClick={() => handleNavClick("home")}>
          Home
        </button>
        <input
          type="text"
          placeholder="Search products"
          className="search-input mobile-search"
          onChange={(e) => {
            // Get the current store state
            const store = useStore.getState();
            // Update search query
            store.setSearchQuery(e.target.value);
            // Navigate to shop if not already there and if there's a query
            if (e.target.value && widgetTab !== "shop") {
              setWidgetTab("shop");
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && widgetTab !== "shop") {
              setWidgetTab("shop");
            }
          }}
        />
        <button className="nav-link" onClick={() => handleNavClick("shop")}>
          All Products
        </button>
        <button className="nav-link" onClick={() => handleNavClick("cart")}>
          <span className="material-symbols-rounded">shopping_cart</span>
          Cart
        </button>
        <button className="nav-link mobile-logout" onClick={handleLogout}>
          <span className="material-symbols-rounded">logout</span>
          Logout
        </button>
      </div>

      {widgetTab === "home" && (
        <>
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

          <div className="contact-section">
            <h1 className="contact-title">Have a question?</h1>
            {state.succeeded ? (
              <div className="contact-success">
                <span className="material-symbols-rounded">check_circle</span>
                Thanks! Your message has been sent.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="contact-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="contact-input"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="contact-error"
                  />
                </div>
                <div className="contact-input-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="contact-input contact-textarea"
                    rows="4"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="contact-error"
                  />
                </div>
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DashboardTab;
