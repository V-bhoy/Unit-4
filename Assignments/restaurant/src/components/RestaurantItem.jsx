import React from 'react';
import "./resto.css";

const RestaurantItem = ({item}) => {
  return (
    <div className='item'>
        <img src={item.url} alt="food" />
        <h4>{item.name}</h4>
        <p>{item.categories.t1}, {item.categories.t2}, {item.categories.t3}, {item.categories.t4}</p>
        <p>Costs Rs. {item.price} for one</p>
        <p>Starts from Rs. {item.minprice}</p>
        {item.payment.includes("cash")?(<p>Click To Order</p>):(<p>Accepts online payments only!</p>)}
        <button>Order</button>
        
    </div>
  )
}

export default RestaurantItem