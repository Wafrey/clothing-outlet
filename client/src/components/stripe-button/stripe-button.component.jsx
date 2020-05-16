import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2V1zxeeUPxni9g3vesmMhMzr00hIZK3Yzg";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment is successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure you use the provided cart"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Outlet EOOD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/L2c.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      bitcoin
    />
  );
};

export default StripeCheckoutButton;
