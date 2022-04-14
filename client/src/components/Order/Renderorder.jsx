import { useState } from "react";
import React from 'react';
import '../Options.css';

const Renderorder = ( data ) =>{
    //console.log(data);
    return(
        <>
    <div className="score">
        {data.data}<a href="https://www.google.com/" target={"_blank"}>Orders</a>
      </div>
    </>
    );
}
export default Renderorder;