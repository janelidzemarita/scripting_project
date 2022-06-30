import React from 'react'
import "./abtus.css";
import log from "./download.png";

export default function Abouti() {
  return (
    
    <div class="column">
      
      <div class="card">
        <img src={log} alt="kiuiu" />
        <div class="container">
         <h2>KIU</h2>
          <p classname="title">Designer</p>
          <p>please call us at Tel.: 555 11 80 40
           (+995) 555 118040
           (+995) 577 477197
          </p>
        <p>info@kiu.edu.ge.</p>
        <p><button classnameS="button">Contact</button></p>
        </div>
      </div>   
    </div>
  )
}
