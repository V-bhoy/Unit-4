import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
   height: 250px;
   width: 350px;
   background-color: red;
   margin: 20px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   color: white;
   border-radius: 10px;
   &>div:last-child{
       display: flex;
       flex-direction: row;
       gap: 25px;
       justify-content: flex-start;
   }
`;
const CardNum = styled.div`
   width: 100%;
   font-size: 26px;
   letter-spacing: 1.8px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const Label = styled.label`
    font-size: 10px;
    font-weight: bold;
`;
const Para = styled.p`
   font-weight: bold;
`;
const Icon = styled.i`
    color: white;
    font-size: 28px ;
    text-align: right;

`;


const CreditCard = ({data}) => {
  let cardNumber="";
  for(var i=0; i<16; i++){
      cardNumber=cardNumber+data.card[i];
      if(i===3 || i===7 || i===11){
          cardNumber=cardNumber+" ";
      }
  }
  return (
    <Card>
        <Icon className="fa fa-cc-visa"></Icon>
        <div>
            <CardNum>{cardNumber}</CardNum>
        </div>
        <div>
            <div>
                <Label>CARD HOLDER</Label>
                 <Para>{data.name}</Para>
            </div>
            <div>
                <Label>EXPIRES</Label>
                 <Para>{data.exmonth}/{data.exyear[2]}{data.exyear[3]}</Para>
            </div>
            <div>
                <Label>CVC</Label>
                 <Para>{data.cvc}</Para>
            </div>
        </div>
    </Card>
  )
}

export default CreditCard