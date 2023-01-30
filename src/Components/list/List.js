import React from 'react'
import Card from '../card/Card';
import './list.scss'

const List =() =>{
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
        id: 2,
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
      {
        id: 4,
        img: "https://images.pexels.com/photos/10244681/pexels-photo-10244681.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Chemise",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 5,
        img: "https://images.pexels.com/photos/7577141/pexels-photo-7577141.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Chemise",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 6,
        img: "https://images.pexels.com/photos/14472544/pexels-photo-14472544.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Chemise",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
    ];
  return (
    <div className='list'>{data?.map(item =>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List