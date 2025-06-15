import { useEffect, useState, useRef } from "react";
import "./BoughtWidget.css";
import { useStore } from "../GlobalVariables";
import QRCode from "react-qr-code";

const BoughtWidget = () => {
  const { cart, setCart } = useStore();
  const [paymentImages, setPaymentImages] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("cart-no-bg");
    return () => {
      document.body.classList.remove("cart-no-bg");
    };
  }, []);

  // Calculate total price of all products in cart
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  // Remove product from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Handle file selection for payment proof
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;
    
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    
    setPaymentImages([...paymentImages, ...newImages]);
    
    // Reset file input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
          <div className="bought-table-header">
            <span className="bought-th product-details">Product</span>
            <span className="bought-th subtotal">QR Code</span>
            <span className="bought-th action">Action</span>
          </div>

          {/* Display cart items */}
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty. Add some products!</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                {/* Product section */}
                <div className="product-section">
                  <div className="product-img-container">
                    <img src={item.img} alt={item.name} className="product-img" />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-price">₱{item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                {/* QR code section */}
                <div className="qr-code-section">
                  <QRCode 
                    value={`Vision Academy - ${item.name} - ₱${item.price}`} 
                    size={120} 
                    className="product-qr"
                  />
                </div>
                
                {/* Action section */}
                <div className="action-section">
                  <button 
                    className="remove-item-btn"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <span className="material-symbols-rounded delete-icon">close</span>
                  </button>
                </div>
              </div>
            ))
          )}
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
              <span className="order-value">₱{totalAmount.toFixed(2)}</span>
            </div>
            <div className="order-row total-row">
              <span className="order-label">Total Amount</span>
              <span className="order-value">₱{totalAmount.toFixed(2)}</span>
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
              
              {/* Display uploaded images */}
              {paymentImages.length > 0 && (
                <div className="payment-images-container">
                  {paymentImages.map((image, index) => (
                    <div key={index} className="payment-image-item">
                      <img 
                        src={image.preview} 
                        alt={`Payment proof ${index + 1}`} 
                        className="payment-image-preview" 
                      />
                      <div className="payment-image-overlay">
                        <button 
                          className="remove-image-btn"
                          onClick={() => removeImage(index)}
                        >
                          <span className="material-symbols-rounded">delete</span>
                        </button>
                      </div>
                      <p className="payment-image-name">{image.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button className="checkout-btn">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtWidget;