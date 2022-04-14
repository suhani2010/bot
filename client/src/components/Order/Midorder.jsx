import React, { useEffect, useState } from "react";
import '../Options.css';
import Renderorder from "./Renderorder";

function Midorder(props) {
    
    const data = [
       `How to order?
       Ordering on our website is very fast and easy! You just have to follow these steps:
       
       1) Select the product and the quantity you want and add it to the shopping cart;
       
       2) Confirm and proceed to Checkout;
       
       3) Fill a simple form with billing address and/or shipping address; choose the shipping method and the payment method and place the order.
       
       if you need more information regarding Orders please check our help center:`,

       `Is my order placed successfully?
       After your order is registered in our system and the payment successfully received, we will send you an automatic order confirmation e-mail with your order number and details that you provided during Checkout. You can always check our "Track My Order" page. In here after providing your order number and email address, you will be able to see all the details about your order.
       
       if you need more information regarding Orders please check our help center: Orders`
    ]
    console.log(data[1]);
    if (props.type === "ans1") {
        //console.log(data[0]);
        return <Renderorder data={data[0]} />;
        
      } 
      else
      return <Renderorder data={data[1]} />;
    
  
}
export default Midorder;