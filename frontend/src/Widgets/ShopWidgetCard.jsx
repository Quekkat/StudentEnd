import { useStore } from "../GlobalVariables";

const ShopWidgetCard =({item})=>{
    const{gotoOrderPage} =useStore();
    return(
        <div className="shop-list-card">
            <div className="shop-list-img-wrap">
              <img
                src={item.itemImgLink}
                alt={item.itemName}
                className="shop-list-img"
              />
            </div>
            <div className="shop-list-info">
              <div className="shop-list-name">{item.itemName}</div>
              <div className="shop-list-bottom">
                <div className="shop-list-price">₱{item.price}</div>
                <button
                  className="shop-list-cart-btn"
                  onClick={() => gotoOrderPage(item._id)}
                >
                  <span className="material-symbols-rounded">shopping_cart</span>
                  <span className="shop-list-cart-text">Add</span>
                </button>
              </div>
            </div>
          </div>
    )
}
export default ShopWidgetCard;