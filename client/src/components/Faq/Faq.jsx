import React from "react";
import '../Options.css';

const Faq = (props) => {
  
  
    const options = [
      {
        question: "What are the return guidelines?",
        handler: props.actionProvider.handleFaqQues1,
        id: 1,
      },
      
      {
        question: "Can I cancel my order?",
        handler: props.actionProvider.handleFaqQues2,
        id: 2,
      },
      {
        question: "How long will the delivery take?",
        handler: props.actionProvider.handleFaqQues3,
        id: 3,
      },
      
      {
        question: "How much will the shipping cost me?",
        handler: props.actionProvider.handleFaqQues4,
        id: 4,
      },
    //   {
    //     question: "Can I pay using International Currency?",
    //     handler: props.actionProvider.handleFaqQues5,
    //     id: 5,
    //   },
      
    //   {
    //     question: "What are the various modes of payment",
    //     handler: props.actionProvider.handleFaqQues6,
    //     id: 6,
    //   },
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
  
  
  
  export default Faq;