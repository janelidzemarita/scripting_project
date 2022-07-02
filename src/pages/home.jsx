import React from 'react'
import Slideshow from "../slide/Slide.jsx";
import Recommend from './profileCard';



export default function Home() {
  return (
    <div>
        <Slideshow/>
        <div className="title">
            <h2 style={{color: 'black'}}>Recommended Destinations</h2>
        </div>
        <Recommend/>
    </div>
  )
}
