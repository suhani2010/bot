import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import Options from '../components/Options/Options';
import Enquirylist from '../components/Enquirylist/Enquirylist';
import Raiseissue from '../components/Raiseissue/Raiseissue';
import Issue from '../components/Raiseissue/Issue';
import Faq from '../components/Faq/Faq';
import Renderfaq from '../components/Faq/Renderfaq';
import Midfaq from '../components/Faq/Midfaq';
import Midorder from '../components/Order/Midorder';
import Order from '../components/Order/Order';
import Renderenquiry from '../components/Enquirylist/Renderenquiry';

console.log("coming here");
const config = {
  botName: "BetaBot",
  initialMessages: [
    createChatBotMessage(`Hey, I'm Chatbot your personal helper...
    If you need to get help, just type or press on one of this topic`,
  {
    widget: "options",
  })
],
 widgets: [
     {
     	widgetName: "options",
    	widgetFunc: (props) => <Options {...props} />,
     },
     {
      widgetName: "enquiry",
      widgetFunc: (props) => <Enquirylist {...props} />,
      // props: {
      //   options: [
      //     {
      //       text: "Product Enquiry",
      //       url:
      //         "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
      //       id: 1,
      //     },
      //     {
      //       text: "Other Enquiry",
      //       url:
      //         "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      //       id: 2,
      //     },
      //   ],
      // }
    },
    {
      widgetName: "enquiryAns",
      widgetFunc: (props) => <Renderenquiry {...props} />,
    },
    {
      widgetName: "issue",
      widgetFunc: (props) => <Raiseissue {...props} />,
    },
    {
      widgetName: "faq",
      widgetFunc: (props) => <Faq {...props} />,
    },
    {
      widgetName: "faqAns1",
      widgetFunc: (props) => <Midfaq {...props} />,
      props: {
        type: "ans1"
      }
    },
    {
      widgetName: "faqAns2",
      widgetFunc: (props) => <Midfaq {...props} />,
      props: {
        type: "ans2"
      }
    },
    {
      widgetName: "faqAns3",
      widgetFunc: (props) => <Midfaq {...props} />,
      props: {
        type: "ans3"
      }
    },
    {
      widgetName: "faqAns4",
      widgetFunc: (props) => <Midfaq {...props} />,
      props: {
        type: "ans4"
      }
    },
    {
      widgetName: "order",
      widgetFunc: (props) => <Order {...props} />,
    },
    {
      widgetName: "orderAns1",
      widgetFunc: (props) => <Midorder {...props} />,
      props: {
        type: "ans1"
      }
    },
    {
      widgetName: "orderAns2",
      widgetFunc: (props) => <Midorder {...props} />,
      props: {
        type: "ans2"
      }
    },
   
    {
      widgetName: "renderreturn",
      widgetFunc: (props) => <Issue {...props} />,
      props: {
        type: "Return"
      }
    },
    {
      widgetName: "renderorder",
      widgetFunc: (props) => <Issue {...props} />,
      props: {
        type: "Order"
      }
    }
     
 ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  
 
};

export default config;