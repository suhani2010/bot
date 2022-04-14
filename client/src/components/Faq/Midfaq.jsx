import React, { useEffect, useState } from "react";
import '../Options.css';
import Renderfaq from "./Renderfaq";

function Midfaq(props) {
    
    const data = [
       "we have a very flexible returns policy which is absolutely customer friendly. If you do not find the product(s) satisfying, you can return it as long as the following conditions are met: It should be unused. You can wear it to check for fit and comfort, making sure that any smell does not transfer to the product (natural body odour, body deodorant, perfume etc.). It should be unwashed. We don't want you wasting any detergent! . The price tags, brand tags, shoe-box and all original packaging must be present . The product must be returned within 15 days. Any gifts received must also be returned along with the product. Toys will have 10 days return/replacement policy in case you have received a damaged, defective, wrong product or product with missing accessory."
        ,
        "Yes! You can cancel an order as long as we havent packed it for you. As soon as the order is cancelled, we refund the entire amount paid for the order."
        ,
        "It's really quick! We strive to deliver all our orders / products in the fastest time possible. Depending upon your address, the delivery time may vary between 2 - 9 working days. That still won't stop us from trying to get you your order faster. On each product's display page, you can enter your location's pin code to check when you can expect to receive the delivery."
       ,
       "All orders worth ₹1199 or above, will be shipped free of cost. For any orders below ₹1199, a nominal fee of ₹99 would be applied."
    ]
    console.log(data[1]);
    if (props.type === "ans1") {
        //console.log(data[0]);
        return <Renderfaq data={data[0]} />;
        
      } 
      else if(props.type === "ans2") return <Renderfaq data={data[1]} />;
      else if(props.type === "ans3") return <Renderfaq data={data[2]} />;
      else
      return <Renderfaq data={data[3]} />;
    
  
}
export default Midfaq;