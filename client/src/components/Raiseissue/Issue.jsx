import React, { useEffect, useState } from "react";
import RenderIssue from "./RenderIssue";
import '../Options.css';

function Issue(props) {
  const data1 = [
    {
    id : 1 ,
    question : "Select reason for returning the product",
    options : ["Damaged","Not working Properly" , "Different product recieved", "Others" ]
    },
    {
      id : 2 ,
      question :"Have you used the product" ,
      options : ["YES" , "NO"]
    },
    {
      id : 3 ,
      question : "Select refund type",
      options : ["Cashback" , "E-wallet" , "Exchange"]
      }
    ]
    const data2 = [
      {
      id : 1 ,
      question : "How many days have passed since you ordered",
      options : ["less than 7 days","7-14 days" ,"more than 14 days",  ]
      },
      {
        id : 2 ,
        question :"Have you provided the correct shipping details ,Please Check" ,
        options : ["YES" , "NO"]
      },
      {
        id : 3 ,
        question : "Whats the status of your order",
        options : ["Delivered" , "Shipped" , "Dispatched" ]
        }
      ]
  
    if (props.type === "Return") {
      return <RenderIssue data={data1} />;
    } 
    else if(props.type === "Order") return <RenderIssue data={data2} />;
  
}
export default Issue;
