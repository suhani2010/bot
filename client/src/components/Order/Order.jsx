import React from "react";
import '../Options.css';

const Order = (props) => {
  
  
    const options = [
      {
        question: "Order Steps",
        handler: props.actionProvider.handleOrderQues1,
        id: 1,
      },
      
      {
        question: "Track Order",
        handler: props.actionProvider.handleOrderQues2,
        id: 2,
      },
    ]
  
    const optionsMarkup = options.map((option) => (
      <button
        className="option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.question}
      </button>
    ));
  
    return <div className="options-container">{optionsMarkup}</div>;
  };
  
  
  
  export default Order;