import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './slider.scss'

const Slider = () => {
    const data = [
      "https://images.pexels.com/photos/5935251/pexels-photo-5935251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/6140645/pexels-photo-6140645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/11568939/pexels-photo-11568939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
  return (
    <div className="slider">
      <div class="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt=""/>
      </div>
      <div class="icons">
        <div class="icon">
          <WestOutlinedIcon />
        </div>
        <div class="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider