import { useEffect, useState, useRef } from "react";
import "./BoughtWidget.css";
import { useStore } from "../GlobalVariables";
import QRCode from "react-qr-code";

const BoughtWidget = () => {
  const { cart, setCart,orderItem } = useStore();
  const [paymentImages, setPaymentImages] = useState([]);
  const fileInputRef = useRef(null);
  const [form, setFormData] = useState({
    ORDERID: cart._id,
    GCASHPROOF:"",
  })

  


  // Handle file selection for payment proof
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              const base64String = reader.result;
              setFormData((prev) => ({
              ...prev,
              GCASHPROOF: base64String,
              }));

          };
      reader.readAsDataURL(file); // convert file to base64
    }
  };
  const makeOrder =async ()=>{
    console.log(form.ORDERID);
    console.log(form.GCASHPROOF);
    await orderItem(form);
  }

  // Remove a payment proof image
  const removeImage = (index) => {
    const updatedImages = [...paymentImages];
    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setPaymentImages(updatedImages);
  };

  // Trigger file input click
  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bought-bg">
      <div className="bought-main-row">
        <div className="bought-left">
          <h1 className="bought-title">Vision Cart</h1>

          
            <div className="cart-items-container">
                <div className="cart-item-row">
                  {/* Product section */}
                  <div className="cart-item-product">
                    <div className="product-img-container">
                      <img 
                        src={cart.itemImgLink || cart.img} 
                        alt={cart.itemName || cart.name} 
                        className="product-img" 
                      />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{cart.itemName || cart.name}</h3>
                      <p className="product-price">₱{(cart.price || 0).toFixed(2)}</p>
                    </div>
                  </div>
                  
                  {/* QR code section */}
                  <div className="cart-item-qr">
                    <QRCode 
                      value={`Vision Academy - ${cart.itemName || cart.name} - ₱${cart.price || 0}`} 
                      size={80} 
                      className="product-qr"
                    />
                  </div>
                  
                  {/* Action section */}
                  <div className="cart-item-action">
                    <button 
                      className="remove-item-btn no-hover-bg"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <span className="material-symbols-rounded delete-icon">close</span>
                    </button>
                  </div>
                </div>
            </div>
        </div>

        <div className="bought-right">
          <div className="order-summary-card">
            <h1 className="order-summary-title">Order Summary</h1>
            <label className="order-label" htmlFor="payment-method">Payment Method</label>
            <input
              id="payment-method"
              className="order-input"
              type="text"
              value="Online Payment"
              readOnly
            />
            <div className="order-row">
              <span className="order-label">Price</span>
              <span className="order-value">{cart.price}</span>
            </div>
            <div className="order-row total-row">
              <span className="order-label">Total Amount</span>
              <span className="order-value">₱{cart.price}</span>
            </div>
            
            {/* Gcash Proof of Payment section */}
            <div className="payment-proof-section">
              <label className="order-label">Gcash Proof of Payment:</label>
              <button 
                type="button" 
                className="add-image-btn" 
                onClick={openFileDialog}
              >
                <span className="material-symbols-rounded">add_photo_alternate</span>
                Add Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden-file-input"
              />
                             
            </div>
            
            <button onClick={makeOrder}className="checkout-btn">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtWidget;