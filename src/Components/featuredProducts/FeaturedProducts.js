import React from 'react'
import './featuredProducts.scss'
import '../card/Card'
import Card from '../card/Card'

const FeaturedProducts = ({type}) => {

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400",
    img2: "https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Long Sleeve Graphic T-Shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2 ,
    img: "https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&w=400",

    title: "Long Sleeve Graphic T-Shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/932402/pexels-photo-932402.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Chemise",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts