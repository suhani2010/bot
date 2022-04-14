import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Draggable from 'react-draggable';
import 'react-chat-widget/lib/styles.css';
import Widgeticons from './components/Widgetsicons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Icons from './components/Icons';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';

function App() {
 
  return(<>
 <div className="App">
      <Icons />
    </div>
    </>
  )
}

export default App;