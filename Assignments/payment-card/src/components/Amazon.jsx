import React from 'react'

const Amazon = ({date,type,device,logo}) => {
  return (
    <div className='container' style={{backgroundColor:"orange"}} >
        <div className='left'>
            <p>{date}</p>
            <button>Case Study</button>
            <div><h1>{type} Gift</h1></div>
            <div><h1>Pay</h1></div>
            <p>{device}-Mobile</p>
        </div>
        <div className='right'>
        <i class={logo}></i>
        <i class="fa fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Amazon