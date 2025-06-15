import { useEffect, useState } from "react";
import "./ShopWidget.css";
import { useStore } from "../GlobalVariables";
import ShopWidgetCard from "./ShopWidgetCard";

const ShopWidget = () => {
  const { searchQuery } = useStore();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {getItemList, itemList} = useStore();

  // Runs once to load item list from db:
  useEffect(()=>{
    getItemList();
    setFilteredProducts(itemList);
  },[])

  useEffect(() => {
    document.body.classList.add("shop-no-bg");
    return () => {
      document.body.classList.remove("shop-no-bg");
    };
  }, []);

  // Filter products when search query changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(itemList);
    } else {
      const filtered = itemList.filter((product) =>
        product.itemName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, itemList]);

  return (
    <div className="shop-bg">
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
