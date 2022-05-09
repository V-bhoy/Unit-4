import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import CreditCard from './CreditCard';

const Box= styled.div`
   display: flex;
   justify-content: space-around;
`;
const Forms= styled.form`
   width: 50%;
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 20px;
   &>div{
      display: flex;
      flex-direction: column;
      gap:5px;
    }
    &>div:nth-child(3){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &>div:nth-child(3)>div{
        width: 30%;
    }
    &>div:nth-child(4){
        display: flex;
        flex-direction: row;
        width: 70%;
        margin: auto;
        justify-content: center;
    }
`;

const Label= styled.label`
   font-size: ${props=>props.type==="pay"?"15px":"10px"};
`;
const Input= styled.input`
    border: none;
    border-bottom:${props=>props.name==="amt"?"none":"1px solid pink"} ;
    color: ${props=>props.type==="submit"?"white":"black"};
    padding: ${props=>props.type==="submit"?"10px":"0px 5px"};
    background-color: ${props=>props.type==="submit"?"red":"transparent"};
    font-weight: ${props=>props.type==="submit"?"bold":"500"};
    width: ${props=>props.type==="submit"?"30%":"100%"};
    border-radius: ${props=>props.type==="submit"?"8px":"none"};
    margin: auto;
    cursor: ${props=>props.type==="submit"?"pointer":"auto"};
`;

const Form = () => {
  const [dataObj, setDataObj] = useState({});

  const [show, setShow] = useState(false);

  const handleClick=(e)=>{
    e.preventDefault();
    console.log(dataObj);
    setShow(true);
  }

  const handleChange=(e)=>{
      let inpName= e.target.name;
      setDataObj({...dataObj,[inpName]: e.target.value.trim()})
  }
  return (
    <Box>
    <div>
       {show?(<CreditCard data={dataObj}/>):(null)}
    </div>
    <div>
        <p style={{fontSize:"22px",textAlign:"center"}}>Payment details</p>
        <Forms onSubmit={handleClick}>
            <div>
                <Label>CARDHOLDER NAME</Label>
                <Input type="text" name="name" style={{fontFamily: "Fontawesome"}} placeholder="&#xf007;" onChange={handleChange}/>
            </div>
            <div>
                <Label>CARD NUMBER</Label>
                <Input type="tel" inputMode='numeric' pattern="[0-9\s]{13,19}" autoComplete='cc-number' maxLength="16" name="card" style={{fontFamily: "Fontawesome"}} placeholder="&#xf09d;" onChange={handleChange}/>
            </div>
            <div>
              <div>
                <Label>EXPIRY MONTH</Label>
                <Input type="tel" inputMode='numeric' maxLength="2"  name="exmonth" style={{fontFamily: "Fontawesome"}} placeholder="&#xf133;" onChange={handleChange}/>
              </div>
              <div>
                <Label>EXPIRY YEAR</Label>
                <Input type="tel" inputMode='numeric' maxLength="4"  name="exyear" style={{fontFamily: "Fontawesome"}} placeholder="&#xf133;" onChange={handleChange}/>
              </div>
              <div>
                <Label>CVC</Label>
                <Input type="tel" inputMode='numeric' maxLength="3" name="cvc" style={{fontFamily: "Fontawesome"}} placeholder="&#xf023;" onChange={handleChange}/>
              </div>
            </div>
            
            <div>
                <Label type="pay">Payment amount:</Label>
                <Input type="text" name="amt" style={{width:"30%", marginLeft:"0px"}} onChange={handleChange}/>
            </div>
            <Input type="submit" value="PAY"/>
        </Forms>
    </div>
    </Box>
  )
}

export default Form