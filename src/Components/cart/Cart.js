import React from 'react'
import './cart.scss'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = ({item}) => {

    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=400",
       /*  img2: "https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&w=400", */
        title: "Long Sleeve Graphic T-Shirt",
        desc: "Long Sleeve Graphic T-Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg?auto=compress&cs=tinysrgb&w=400",

        title: "Long Sleeve Graphic T-Shirt",
        desc: "Long Sleeve Graphic T-Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
    ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="prices">1*${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>RESET CART</span>
    </div>
  );
}

export default Cart