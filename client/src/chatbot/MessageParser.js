import React from 'react';
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
      if(lowercase.includes("hello") ||lowercase.includes("hi") || lowercase.includes("hey"))
      {
        this.actionProvider.greet();
      }
      if (lowercase.includes("enquiry")) {
        this.actionProvider.handleEnquiry();
      } else if (lowercase.includes("issue")) {
        this.actionProvider.handleIssue();
      } else if (lowercase.includes("faq")) {
        this.actionProvider.handleFaq();
      } else if (lowercase.includes("order")) {
        this.actionProvider.handleOrder();
      } else if (lowercase.includes("continue")) {
        this.actionProvider.handleContinue();
      } 
    }
  }
  export default MessageParser;