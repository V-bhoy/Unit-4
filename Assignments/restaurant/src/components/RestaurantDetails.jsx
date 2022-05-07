import React from 'react'
import RestaurantItem from './RestaurantItem';
import Form from './Form';
import "./resto.css";

const RestaurantDetails = () => {
  const [data,setdata] = React.useState([]);
  const [showform,setshowform]= React.useState(false);
  React.useEffect(()=>{
    const stored= async()=>{
        let res=await fetch("http://localhost:8080/data");
        let whole_data= await res.json();
        setdata(whole_data);
    };
    stored();
  },[]);

  const stored_use= async()=>{
    let res = await fetch("http://localhost:8080/data");
    return await res.json();
   };
   
   
  const addFood = (item)=>{
      setdata([...data,item]);
      setshowform(false);
  }
  const sortStar4 = async ()=>{
    let db=await stored_use();
     const updated4=db.filter((elem)=>elem.rating>=4);
     setdata(updated4);
 }
  const sortStar3 = async ()=>{
     let db=await stored_use();
      const updated3=db.filter((elem)=>elem.rating>=3);
      setdata(updated3);
  }
  const sortStar2=async ()=>{
    let db=await stored_use();
    const updated2=db.filter((elem)=>elem.rating>2);
    setdata(updated2);
  }
  const sortStar1=async ()=>{
    let db=await stored_use();
    const updated1=db.filter((elem)=>elem.rating>=1);
    setdata(updated1);
  }
  const sortPayment=(e)=>{
    let method= e.target.value;
    if(method==="cash"){
      let cashData=data.filter((elem)=>elem.payment.includes("cash"));
      setdata(cashData);
    }
    else if(method==="card"){
      let cardData=data.filter((elem)=>elem.payment.includes("card"));
      setdata(cardData);
    }
    else if(method==="all"){
      let allData=data.filter((elem)=>elem.payment.includes("cash"&&"card"&&"upi"));
      setdata(allData);
    }
  }
  const sortPrice=(e)=>{
      let val= e.target.value;
      if(val==="asc"){
        data.sort((a,b)=>a.minprice-b.minprice);
        console.log(data)
        setdata(data);
      }
      else if(val==="desc"){
        data.sort((a,b)=>b.minprice-a.minprice);
        setdata(data);
      }
  }
 
  return (
      <>
      <h1 className='title'>Restaurant Details</h1>
      <button className='addbtn' onClick={()=>setshowform(!showform)}>ADD RESTAURANT</button>
      <div className='btns'>
        <div>
          <button onClick={()=>{sortStar4()}}>4 Star</button>
          <button onClick={()=>sortStar3()}>3 Star</button>
           <button onClick={()=>sortStar2()}>2 Star</button>
          <button onClick={()=>sortStar1()}>1 Star</button>
        </div>
          <div>
            <button value="cash" onClick={(e)=>{sortPayment(e)}}>Cash only</button>
            <button value="card" onClick={(e)=>{sortPayment(e)}}>Card Accepted</button>
            <button value="all" onClick={(e)=>{sortPayment(e)}}>All</button>
          </div>
          <div>
            <button value="asc" onClick={(e)=>{sortPrice(e)}}>Low to High</button>
            <button value="desc" onClick={(e)=>{sortPrice(e)}}>High to Low</button>
          </div>
      </div>
      {showform?(<Form addFood={addFood}/>):(null)}
       <div className='container'>
            {data.map((elem)=>(
                    <RestaurantItem item={elem} key={elem.id}/>
                ))}
       </div>
      </>
   
  )
}

export default RestaurantDetails