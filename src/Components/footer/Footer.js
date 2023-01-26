import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessoire</span>
          <span>New arrivals</span>
        </div>
        <div className="item">
          <h1>Lien</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
         
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MollShop</span>
          <span className="copyright">copyright 2023. All Right Reserved</span>
        </div>
        <div className="right">
          <img src="img/sponsors.png"/>
        </div>
      </div>
    </div>
  );
}

export default Footer