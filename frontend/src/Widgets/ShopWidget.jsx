import { useEffect } from "react";
import "./ShopWidget.css";
import productImg from "../assets/nihguh.jpg";

const products = [
  { name: "PE Uniform", price: "₱350" },
  { name: "Event T-Shirt", price: "₱250" },
  { name: "ID Lace", price: "₱50" },
  { name: "School Jacket", price: "₱700" },
  { name: "Notebook", price: "₱40" },
  { name: "Ballpen", price: "₱20" },
  { name: "Vision Mug", price: "₱120" },
  { name: "Vision Cap", price: "₱180" },
  { name: "Vision Bag", price: "₱400" },
  { name: "Vision Patch", price: "₱60" },
];

const ShopWidget = () => {
  useEffect(() => {
    document.body.classList.add("shop-no-bg");
    return () => {
      document.body.classList.remove("shop-no-bg");
    };
  }, []);

  return (
    <div className="shop-bg">
      <h1 className="shop-title">All Products</h1>
      <div className="shop-card-grid">
        {products.map((item, idx) => (
          <div className="shop-card" key={idx}>
            <div className="shop-card-img-wrap">
              <img src={productImg} alt={item.name} className="shop-card-img" />
            </div>
            <div className="shop-card-name">{item.name}</div>
            <div className="shop-card-bottom">
              <div className="shop-card-price">{item.price}</div>
              <button className="shop-card-cart-btn">
                <span className="material-symbols-rounded">shopping_cart</span>
                <span className="shop-card-cart-text">Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopWidget;
