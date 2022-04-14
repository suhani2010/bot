import React from 'react';
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet = () =>{
      const message= this.createChatbotMessage("Hello there, amigo");
      this.addMessageToState(message);
    }
    handleEnquiry = () => {
      const message = this.createChatbotMessage(
        "What you should be inquiring about",
        {
          widget: "enquiry",
        }
      );
  
      this.addMessageToState(message);
    };
    handleEnquiryQues = () => {
      const message = this.createChatbotMessage(
        "Give Details",
        {
          widget: "enquiryAns",
        }
      );
  
      this.addMessageToState(message);
    };
    handleIssue = () => {
      const message = this.createChatbotMessage(
        "Select an issue",
        {
          widget: "issue",
        }
      );
  
      this.addMessageToState(message);
    };
    handleOrderQues1 = () =>{
      const message = this.createChatbotMessage("Order Steps",
        {
          widget: "orderAns1",
        }
      );
      this.addMessageToState(message);
      
    }
    handleOrderQues2 = () =>{
      const message = this.createChatbotMessage("Order Track",
        {
          widget: "orderAns2",
        }
      );
      this.addMessageToState(message);
      
    }
    handleFaq = () => {
      const message = this.createChatbotMessage(
        "Select an FAQ",
        {
          widget: "faq",
        }
      );
  
      this.addMessageToState(message);
    };
    handleFaqQues1 = () =>{
      const message = this.createChatbotMessage("This is ans",
        {
          widget: "faqAns1",
        }
      );
      this.addMessageToState(message);
      
    }
    handleFaqQues2 = () =>{
      const message = this.createChatbotMessage("This is ans",
        {
          widget: "faqAns2",
        }
      );
  
      this.addMessageToState(message);
      
    }
    handleFaqQues3 = () =>{
      const message = this.createChatbotMessage("This is ans",
        {
          widget: "faqAns3",
        }
      );
  
      this.addMessageToState(message);
      
    }
    handleFaqQues4 = () =>{
      const message = this.createChatbotMessage("This is ans",
        {
          widget: "faqAns4",
        }
      );
  
      this.addMessageToState(message);
      
    }
    handleOrder = () => {
      const message = this.createChatbotMessage(
        "Select Order",
        {
          widget: "order",
        }
      );
  
      this.addMessageToState(message);
    };
    handleReturn = () => {
      //console.log("heloooooooooooo");
      const message = this.createChatbotMessage(
        "Return Policy",
        {
          widget: "renderreturn",
        }
      );
  
      this.addMessageToState(message);
    };
    
    
    handleOrder1 = () => {
      const message = this.createChatbotMessage(
        "Order Policy",
        {
          widget: "renderorder",
        }
      );
  
      this.addMessageToState(message);
    };

    handleContinue = () => {
      const message = this.createChatbotMessage(
        "Welcome to the menu again",
        {
          widget: "options"
        }
      );
      this.addMessageToState(message);
    };

    addMessageToState = (message) =>{
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
      
    }
  }
  
  export default ActionProvider;