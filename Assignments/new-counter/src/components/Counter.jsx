import React from 'react'

const Counter = () => {
    const [count,setcount] = React.useState(0);
    const refx = React.useRef(0);
    console.log(refx);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <div>
            <button onClick={()=>{setcount(count+1); refx.current=refx.current+1; console.log(refx)}}>Increment</button>
            <button onClick={()=>{setcount(count-1); refx.current=refx.current+1; console.log(refx)}}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter