import { useEffect, useState } from "react";
import "./ShopWidget.css";
import productImg from "../assets/nihguh.jpg";
import { useStore } from "../GlobalVariables";
import ShopWidgetCard from "./ShopWidgetCard";

const ShopWidget = () => {
  const { cart, setCart, searchQuery } = useStore();
  const [showAlert, setShowAlert] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {getItemList, itemList} = useStore();

  //runs once to load item list from db:
  useEffect(()=>{
    getItemList();
    setFilteredProducts(itemList);
  },[])

  // Define all products
  const products = [
    { name: "PE Uniform", price: 350, img: productImg },
    { name: "Event T-Shirt", price: 250, img: productImg },
    { name: "ID Lace", price: 50, img: productImg },
    { name: "School Jacket", price: 700, img: productImg },
    { name: "Notebook", price: 40, img: productImg },
    { name: "Ballpen", price: 20, img: productImg },
    { name: "Vision Mug", price: 120, img: productImg },
    { name: "Vision Cap", price: 180, img: productImg },
    { name: "Vision Bag", price: 400, img: productImg },
    { name: "Vision Patch", price: 60, img: productImg },
  ];

  useEffect(() => {
    document.body.classList.add("shop-no-bg");
    return () => {
      document.body.classList.remove("shop-no-bg");
    };
  }, []);

  // Filter products when search query changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, img: productImg }]);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  return (
    <div className="shop-bg">
      {showAlert && (
        <div className="shop-alert">
          <span className="material-symbols-rounded">check_circle</span>
          Added to cart
        </div>
      )}
      <h1 className="shop-title">
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
      </h1>

      {/* Show search results count if searching */}
      {searchQuery && (
        <p className="search-results-count">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "item" : "items"} found
        </p>
      )}

      {/* Display message if no results found */}
      {filteredProducts.length === 0 && searchQuery && (
        <div className="no-results">
          <p>No products found matching "{searchQuery}"</p>
        </div>
      )}

      <div className="shop-list">
        {filteredProducts.map((product) => (
          <ShopWidgetCard key={product._id} item={product}/>
        ))}
      </div>
    </div>
  );
};

export default ShopWidget;
