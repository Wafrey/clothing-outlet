import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2V1zxeeUPxni9g3vesmMhMzr00hIZK3Yzg";

  const onToken = (token) => {
    console.log(token);
    alert("Succesful Payment!");
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
