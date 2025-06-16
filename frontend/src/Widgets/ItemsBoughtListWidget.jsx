import { useState } from "react";
import { useStore } from "../GlobalVariables";
import "./ItemsBoughtListWidget.css";

const items = [
  {
    itemName: "Wireless Mouse",
    _id: "item001",
    paymentVerified: true
  },
  {
    itemName: "Mechanical Keyboard",
    _id: "item002",
    paymentVerified: false
  },
  {
    itemName: "Gaming Monitor",
    _id: "item003",
    paymentVerified: true
  },
  {
    itemName: "USB-C Hub",
    _id: "item004",
    paymentVerified: false
  }
];

const ItemsBoughtListWidget = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  
  // Handle view details button click
  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };
  
  // Handle closing the details modal
  const closeDetailsModal = () => {
    setSelectedItem(null);
    setShowCancelConfirm(false);
  };
  
  // Handle cancel order confirmation
  const handleCancelConfirmation = () => {
    setShowCancelConfirm(true);
  };
  
  // Handle cancel order action
  const handleCancelOrder = () => {
    // Here you would call your API to cancel the order
    console.log(`Cancelling order: ${selectedItem._id}`);
    
    // Close modals after cancellation
    closeDetailsModal();
    
    // You could show a success message here
  };

  return (
    <div className="items-bought-container">
      <h1 className="items-bought-title">Ordered Items</h1>
      
      <div className="items-bought-grid">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <div className="item-header">
              <h3 className="item-name">{item.itemName}</h3>
              <span 
                className={`payment-status ${item.paymentVerified ? 'verified' : 'pending'}`}
              >
                {item.paymentVerified ? 'Payment Verified' : 'Payment Pending'}
              </span>
            </div>
            
            <div className="item-details">
              <div className="item-icon">
                {item.paymentVerified ? (
                  <span className="material-symbols-rounded status-icon verified-icon">
                    check_circle
                  </span>
                ) : (
                  <span className="material-symbols-rounded status-icon pending-icon">
                    pending
                  </span>
                )}
              </div>
              
              <div className="item-info">
                <p className="item-id">Order ID: {item._id}</p>
                <p className="item-status-text">
                  Status: 
                  <span className={item.paymentVerified ? 'text-verified' : 'text-pending'}>
                    {item.paymentVerified ? ' Ready for pickup' : ' Awaiting payment verification'}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="item-footer">
              <button 
                className="view-details-btn"
                onClick={() => handleViewDetails(item)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Details Modal */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={closeDetailsModal}>
          <div className="details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeDetailsModal}>
              <span className="material-symbols-rounded">close</span>
            </button>
            
            <h2 className="modal-title">Order Details</h2>
            
            <div className="modal-content">
              <div className="order-detail-row">
                <span className="detail-label">Item:</span>
                <span className="detail-value">{selectedItem.itemName}</span>
              </div>
              
              <div className="order-detail-row">
                <span className="detail-label">Order ID:</span>
                <span className="detail-value">{selectedItem._id}</span>
              </div>
              
              <div className="order-detail-row">
                <span className="detail-label">Status:</span>
                <span className={`detail-value ${selectedItem.paymentVerified ? 'text-verified' : 'text-pending'}`}>
                  {selectedItem.paymentVerified ? 'Verified' : 'Pending Verification'}
                </span>
              </div>
              
              {selectedItem.paymentVerified ? (
                <div className="verification-message success">
                  <span className="material-symbols-rounded large-icon">
                    verified
                  </span>
                  <p>Your account is verified</p>
                  <p className="verification-details">
                    Your payment has been verified. You can pick up your item at the Vision Academy store.
                  </p>
                </div>
              ) : (
                <div className="verification-message pending">
                  {!showCancelConfirm ? (
                    <>
                      <span className="material-symbols-rounded large-icon">
                        pending
                      </span>
                      <p>Your payment is awaiting verification</p>
                      <p className="verification-details">
                        This can take up to 24 hours. If you wish to cancel this order, click below.
                      </p>
                      <button 
                        className="cancel-order-btn"
                        onClick={handleCancelConfirmation}
                      >
                        Cancel Order
                      </button>
                    </>
                  ) : (
                    <div className="cancel-confirmation">
                      <span className="material-symbols-rounded warning-icon">
                        warning
                      </span>
                      <h3>Do you want to cancel this order?</h3>
                      <p>This action cannot be undone.</p>
                      <div className="confirmation-buttons">
                        <button 
                          className="confirm-cancel-btn"
                          onClick={handleCancelOrder}
                        >
                          Yes, Cancel Order
                        </button>
                        <button 
                          className="keep-order-btn"
                          onClick={() => setShowCancelConfirm(false)}
                        >
                          No, Keep Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsBoughtListWidget;