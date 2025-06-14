import "./DashboardTab.css";
import logo from "../assets/logo.png";
import hitleer from "../assets/hitleer.jpg";
import { useStore } from "../GlobalVariables";

const DashboardTab = () => {
  const { widgetTab, setWidgetTab } = useStore();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-section navbar-left">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo clickable-logo"
            onClick={() => setWidgetTab("home")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="navbar-section navbar-center">
          <button className="nav-link" onClick={() => setWidgetTab("home")}>
            Home
          </button>
          <input
            type="text"
            placeholder="Search products"
            className="search-input"
          />
        </div>
        <div className="navbar-section navbar-right">
          <button className="nav-link" onClick={() => setWidgetTab("shop")}>
            All Products
          </button>
          <button className="nav-link" onClick={() => setWidgetTab("cart")}>
            <span className="material-symbols-rounded">shopping_cart</span>
          </button>
        </div>
      </nav>

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
                onClick={() => setWidgetTab("shop")}
              >
                All Products
              </button>
              <button
                className="welcome-btn cart-btn"
                onClick={() => setWidgetTab("cart")}
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
