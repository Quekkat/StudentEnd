import { useEffect } from "react";
import "./ShopWidget.css";
import productImg from "../assets/nihguh.jpg";
import { useStore } from "../GlobalVariables";

const ShopWidget = () => {
  const { setWidgetTab, cart, setCart } = useStore();

  useEffect(() => {
    document.body.classList.add("shop-no-bg");
    return () => {
      document.body.classList.remove("shop-no-bg");
    };
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, img: productImg }]);
    setWidgetTab("cart");
  };

  return (
    <div className="shop-bg">
      <h1 className="shop-title">All Products</h1>
      <div className="shop-list">
        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="PE Uniform" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">PE Uniform</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱350</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "PE Uniform", price: 350 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Event T-Shirt" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Event T-Shirt</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱250</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Event T-Shirt", price: 250 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="ID Lace" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">ID Lace</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱50</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "ID Lace", price: 50 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="School Jacket" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">School Jacket</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱700</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "School Jacket", price: 700 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Notebook" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Notebook</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱40</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Notebook", price: 40 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Ballpen" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Ballpen</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱20</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Ballpen", price: 20 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Vision Mug" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Vision Mug</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱120</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Vision Mug", price: 120 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Vision Cap" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Vision Cap</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱180</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Vision Cap", price: 180 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Vision Bag" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Vision Bag</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱400</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Vision Bag", price: 400 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>

        <div className="shop-list-card">
          <div className="shop-list-img-wrap">
            <img src={productImg} alt="Vision Patch" className="shop-list-img" />
          </div>
          <div className="shop-list-info">
            <div className="shop-list-name">Vision Patch</div>
            <div className="shop-list-bottom">
              <div className="shop-list-price">₱60</div>
              <button
                className="shop-list-cart-btn"
                onClick={() => handleAddToCart({ name: "Vision Patch", price: 60 })}
              >
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-list-cart-text">Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopWidget;
