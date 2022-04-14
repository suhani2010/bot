import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Draggable from 'react-draggable';
import 'react-chat-widget/lib/styles.css';
import Widgeticons from './Widgetsicons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

import ContactUs from './ContactUs';
import Profile from './Profile';

function Icons (){
  
    return(
<div className="App">
          <div>
        
        <Router>
        <Widgeticons />
      <Routes>
      {/* <Route exact path = '/' element={<Icons />} /> */}
      <Route exact path = '/' element={<Home />}/>
        <Route  path = '/Home' element={<Home />}/>
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </Router> 
        </div>
      </div>);
}
export default Icons;