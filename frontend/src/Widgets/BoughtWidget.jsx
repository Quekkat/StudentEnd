import { useEffect } from "react";
import "./BoughtWidget.css";

const BoughtWidget = () => {
    useEffect(() => {
        document.body.classList.add("cart-no-bg");
        return () => {
            document.body.classList.remove("cart-no-bg");
        };
    }, []);

    return (
        <div className="bought-bg">
            <div className="bought-main-row">
                <div className="bought-left">
                    <h1 className="bought-title">Vision Cart</h1>
                    <div className="bought-table-header">
                        <span className="bought-th product-details">Product Details</span>
                        <span className="bought-th subtotal">Subtotal</span>
                        <span className="bought-th action">Action</span>
                    </div>
                    {/* You can map your cart items here */}
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
                            <span className="order-value">₱0.00</span>
                        </div>
                        <div className="order-row total-row">
                            <span className="order-label">Total Amount</span>
                            <span className="order-value">₱0.00</span>
                        </div>
                        <button className="checkout-btn">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoughtWidget;