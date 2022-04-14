import React from "react";
import '../Options.css';

const Enquirylist = (props) => {
  
  
    const options = [
      {
        text: "Product Enquiry",
        handler: props.actionProvider.handleEnquiryQues,
        id: 1,
      },
    ]
  
    const enquiryMarkup = options.map((enquiry) => (
      
      <li key={enquiry.id} className="enquiry-list-item">
        <button 
          target="_blank"
          rel="noopener noreferrer"
          className="enquiry-list-item-url"
          onClick={enquiry.handler}
        >
          {enquiry.text}
        </button>
      </li>
    ));
  
    return <ul className="enquiry-list">{enquiryMarkup}</ul>;
  };
  
  export default Enquirylist;