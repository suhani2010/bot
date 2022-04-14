import { useState } from "react";
import React from 'react';
import '../Options.css';

const Renderfaq = ( data ) =>{
    console.log(data);
    return(
        <>
    <div className="score">
        {data.data}
      </div>
    </>
    );
}
export default Renderfaq;