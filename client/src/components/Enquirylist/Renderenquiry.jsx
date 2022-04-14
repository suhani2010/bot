import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../Options.css';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const Renderenquiry = () => {
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);

  function handleSubmit(){
   
    let string  = uuidv4();
    let data ={
      ticketId : string,
      email : document.getElementById("email").value,
      prid : document.getElementById("prid").value,
      prquery : document.getElementById("prquery").value
    }
    
    const submit1 = !submit;
    setSubmit(submit1);
    
    axios.post('http://localhost:5000/send_enquiry_ticket',data)
    .then(res=>{

      console.log(data);
      console.log('senttt');
    }).catch((err)=>{
      console.log(err);
    })
  }
  // console.log(array)
  return (
    <main>
      {submit === false && (
        <div className="quiz-container ">
          <div id="last">
          <div >
              <label>Enter your email id : </label>
              <input id="email" type="email" required/>
              <label>Enter your product id : </label>
              <input id="prid" type="text" required/>
              
              <label>Enter your product query : </label>
              <input id="prquery" type="text" required/>
          </div>
          </div>
        </div>
      )}
      <div>
        {submit === false && <button className="mybutton" onClick={handleSubmit}>Submit</button>}
        {submit === true && <p className="score">Ticket Geneterated Succesfully , Thank you! </p>}
        {submit === true && (
          <p className="score">Type Continue to go to menu!</p>
        )
        }
      </div>
    </main>
  );
};
export default Renderenquiry;