
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const storedOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    const orderDetailsFromLocation = location.state?.orderDetails;
    const finalOrderDetails = orderDetailsFromLocation || storedOrderDetails;

    setOrderDetails(finalOrderDetails);

    if (finalOrderDetails && finalOrderDetails.orderId) { // Check if orderId exists
        setOrderId(finalOrderDetails.orderId); // Correctly set orderId
        console.log("Order ID Retrieved:", finalOrderDetails.orderId); // Debugging
        createOrder(finalOrderDetails);
    } else {
        console.error("Order ID not found in order details.");
    }
  }, [location.state]);

  const createOrder = async (order) => {

    try {
      console.log("Order ID being sent:", order.orderId);
      const response = await axios.post("http://127.0.0.1:8000/payment/paypal/create/", {
          order_id: order.orderId,
      });


      if (response.status === 200) {
          setOrderId(order.orderId);
          console.log("PayPal order created successfully");
      } else {
          console.error("Error creating PayPal order:", response.data);
      }
  } catch (error) {
      console.error("Error creating PayPal order:", error);
  }
  };

  const onApprove = async (data) => {
    console.log(" PayPal Payment Approved!");
    console.log(" PayPal Order ID (orderID):", data.orderID);  //  This from PayPal
    console.log(" Payer ID:", data.payerID);
    console.log(" Backend Order ID (orderId):", orderId);  //  This from Django checkout
    try {
      await axios.post("http://127.0.0.1:8000/payment/paypal/execute/", {
        paymentId: data.orderID,
        PayerID: data.payerID,
        order_id: orderId,
      });

      // window.location.href = "/paymentsuccess/:orderId";
      window.location.href = `/paymentsuccess/${orderId}`;
    } catch (error) {
      console.error("Payment execution failed", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      {orderDetails ? (
        <>
          <p>Order Number: {orderDetails.orderNumber}</p>
          <p>Total: $ {orderDetails.total}</p>
          <p>Payment Method: PayPal</p>

          {/* PayPal Button */}
          <PayPalScriptProvider options={{ "client-id": "AXsbCeEBv_8AwFuISZb63orrRA2f3XMUqgOB73hkAquzJiProqlUEmXHnGtatb2poYe5a-XR-FauAQ6B" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: orderDetails.total.toFixed(2),
                        currency_code: "USD",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  onApprove(data);
                });
              }}
            />
          </PayPalScriptProvider>
        </>
      ) : (
        <p className="text-red-500">Order details not found. Please return to the checkout page.</p>
      )}
    </div>
  );
};

export default Checkout;
