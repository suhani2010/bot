import React from "react";
import '../Options.css';

const Raiseissue = (props) => {
  
  
    const options = [
      {
        text: "Return",
        handler: props.actionProvider.handleReturn,
        id: 1,
      },
      
      {
        text: "Order not delivered",
        handler: props.actionProvider.handleOrder1,
        id: 2,
      },
    ]
  
    const issueMarkup = options.map((issue) => (
      
      <li key={issue.id} className="issue-list-item">
        <button 
          target="_blank"
          rel="noopener noreferrer"
          className="issue-list-item-url"
          onClick={issue.handler}
        >
          {issue.text}
        </button>
      </li>
    ));
  
    return <ul className="issue-list">{issueMarkup}</ul>;
  };
  
  export default Raiseissue;