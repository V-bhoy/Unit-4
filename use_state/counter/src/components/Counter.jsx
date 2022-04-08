import React from "react";



const Counter = (props) => {
   
         const [count, setcount] = React.useState(`${props.value}`)
         // increment & decrement
         
         const IncDec = (val)=> {
            setcount(Number(count)+val);
         }

         const double = () => {
             setcount(Number(count)*2);
         }

         const reset = () => {
             setcount(Number(count)*0);
         }

         return (
            <React.Fragment>
               <h1>{count}</h1>
               <button onClick={()=> IncDec(1)}>Increment</button>
               <button onClick={()=> IncDec(-1)}>Decrement</button>
               <button onClick={()=> double()}>Double</button>
               <button onClick={()=> reset()}>Reset</button>
            </React.Fragment>
         )
         

   
}

export default   Counter;