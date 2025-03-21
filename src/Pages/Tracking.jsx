import React, { useState } from "react";
import { FaShippingFast, FaBoxOpen, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const Tracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const mockOrderData = {
    "12345": { status: "Shipped", estimatedDelivery: "March 25, 2025", icon: <FaShippingFast className="text-blue-400 text-3xl" /> },
    "67890": { status: "Out for Delivery", estimatedDelivery: "March 22, 2025", icon: <FaBoxOpen className="text-yellow-400 text-3xl" /> },
    "54321": { status: "Delivered", estimatedDelivery: "March 20, 2025", icon: <FaCheckCircle className="text-green-400 text-3xl" /> },
  };

  const handleTrackOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setOrderStatus(mockOrderData[orderId] || { status: "Order Not Found", estimatedDelivery: "-", icon: <FaExclamationTriangle className="text-red-400 text-3xl" /> });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">Track Your Order</h1>
      <p className="text-lg text-gray-300 mb-8">Enter your Order ID to check the status of your order.</p>

      {/* Order Input */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Order ID"
          className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button
          className="w-full mt-4 bg-yellow-400 text-gray-900 font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
          onClick={handleTrackOrder}
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track Order"}
        </button>
      </div>

      {/* Order Status Display */}
      {orderStatus && !loading && (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-center animate-fade-in">
          <h2 className="text-2xl font-semibold text-yellow-300 flex items-center justify-center gap-2">
            {orderStatus.icon} {orderStatus.status}
          </h2>
          <p className="text-sm text-gray-400 mt-1">Estimated Delivery: {orderStatus.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
};

export default Tracking;
