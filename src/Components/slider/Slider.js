import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from 'react';
import './slider.scss'

const Slider = () => {
  const [currentSlide, setCurrentSlide]= useState(0)
    const data = [
      "https://images.pexels.com/photos/5935251/pexels-photo-5935251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/6140645/pexels-photo-6140645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11568939/pexels-photo-11568939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide=()=>{
      setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1)
    }
     const nextSlide = () => {

       setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
     };


  return (
    <div className="slider">
      <div class="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt=""/>
      </div>
      <div class="icons">
        <div class="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div class="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider