import React from "react";

import '../Options.css';

const Options = (props) => {
  const options = [
    { text: "Product Enquiry", handler: props.actionProvider.handleEnquiry, id: 1 },
    { text: "Raise an Issue", handler: props.actionProvider.handleIssue, id: 2 },
    { text: "FAQ", handler: props.actionProvider.handleFaq, id: 3 },
    { text: "Order", handler: props.actionProvider.handleOrder, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;