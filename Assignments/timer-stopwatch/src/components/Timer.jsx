import React from 'react'

const Timer = () => {
    let min= React.useRef(5);
    const [sec, setsec] = React.useState("00");
    const startTimer=()=>{
        let count=0;
      setInterval(()=>{
           min.current=min.current-1;
           count++;
           console.log(count);
      },1000);
    }
  return (
      <>
    <div className='timerContainer'>
         {min.current}m  {sec}s
    </div>
     <div>
     <button onClick={()=>startTimer()}>Start</button>
     <button>Reset</button>
   </div>
   </>
  )
}

export default Timer