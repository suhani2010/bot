import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import Home from './Home';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";

import './style.css';
import Draggable from 'react-draggable';
// import {myfunction} from './myfunction';


function Widgeticons() {
   
    const shoot = () => {
        
        var x = document.getElementById("show");
        
        if (x.style.display === "none") {
          x.style.display = "block";
         
        } else {
          x.style.display = "none";
        }
      }
    
     
      const showhide = () => {
        
         var x = document.getElementById("botvis");
         var y=document.getElementById("hide1");
         if (x.style.display === "none") {
           x.style.display = "block";
           y.style.display = "none";
         } else {
           x.style.display = "none";
           y.style.display = "block";
         }
       }
        
       const linkStyle = {
         
         textDecoration: "none",
         color : "#000"
         
       };
       
    return(<><Draggable
    bounds = 'body'
   //  bounds={{top: -600, left: -1400, right: 0, bottom: 0}}
    >
       
       <div className='circle-container'>
    <div class="wrapper" id="show">
       <div id="hide1">
         <div class="tp icon home">
            <div class="tooltip">
               Home
            </div>
            <button className='btnn'><Link to="/Home" style={linkStyle}><span><i class="fas fa-home"></i></span></Link></button>
         </div>
         <div class="tp icon contact">
            <div class="tooltip">
               ContactUs
            </div>
            <button className='btnn'><Link to="/ContactUs" style={linkStyle}><span><i class="fas fa-address-book"></i></span></Link></button>
         </div>
         <div class="tp icon profile">
            <div class="tooltip">
               Profile
            </div>
            <button className='btnn'><Link to="/Profile" style={linkStyle}><span><i class="fas fa-user-circle"></i></span></Link></button>
         </div>
         </div>
         <div id="botvis">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
         <div class="icon chbot">
            <div class="tooltip">
               Chatbot
            </div>
            <button className='btnn' onClick={showhide}><span><i class="fas fa-comments "></i></span></button>
         </div>
         
      </div>

      
     <div class="wrapper center">
         <div class="icon expand">
            <div class="tooltip">
               Click 
            </div> 
            <button className='btnn' onClick={shoot}><span><i class="fas fa-dot-circle" ></i></span></button>
         </div>
     </div>

     
    </div>
    
    </Draggable>
</>
);
}
export default Widgeticons;