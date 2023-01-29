import React from 'react'
import './contact.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () =>{
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
      </div>
      <div className="mail">
        <input type="text" placeholder="Enter your e-mail..." />
        <button>Join us </button>
      </div>

      <div className="icon">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
    </div>
  );
}

export default Contact