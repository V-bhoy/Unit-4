import Announcement from '../components/Announcement'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container= styled.div`
   
`;
const Wrapper = styled.div`
   padding: 20px;
   ${mobile(
       {padding: "10px"}
   )}
`;
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: 1px solid black;
   border: ${props=>props.type==="filled" && "none"};
   background-color: ${props=>props.type==="filled" ? "black": "transparent"};
   color: ${props=>props.type==="filled" && "white"};
`;

const TopTexts= styled.div`
    ${mobile(
       {display: "none"}
   )}
`;
const TopText= styled.span`
   text-decoration: underline;
   cursor: pointer;
   margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile(
       {flexDirection: "column"}
   )}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 55vh;
`;

const Hr = styled.hr`
 background-color:#eee;
 border: none;
 height: 1px;
 margin: 10px;
`;

const Product= styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile(
       {flexDirection: "column"}
   )}
`;
const ProductDetail = styled.div`
   flex: 2;
   display: flex;
   ${mobile(
       {marginBottom: "15px"}
   )}
`;
const Image = styled.img`
   width: 300px;
   height: 35vh;
   ${mobile(
       {width: "200px"}
   )}
`;
const Details= styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   font-size: 15px;
   font-weight: 500;
`;
const ProductName = styled.span``;
const ProductId= styled.span``;
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: #ffc400;
`;
const ProductSize = styled.span``;
const PriceDetail= styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AmountContainer= styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Amount= styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile(
       {margin: "5px 15px"}
   )}
`;
const Price= styled.div`
    font-size: 40px;
    font-weight: 300;
    ${mobile(
       {marginBottom: "20px"}
   )}
`;

const SummaryTitle = styled.h1`
   font-weight: 200;
`;
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=>props.type==="total" && 500};
   font-size: ${props=>props.type==="total" && 24}px;
`;
const SummaryText = styled.span``;
const SubTotalPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://img.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg?size=626&ext=jpg&ga=GA1.2.252166712.1651088395"/>
                         <Details>
                             <ProductName><b>Product:</b> COZY ORANGE SWEATSHIRT</ProductName>
                             <ProductId><b>ID:</b> 2354576829</ProductId>
                             <ProductColor/>
                             <ProductSize><b>Size:</b> 37.5</ProductSize>
                         </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <AmountContainer>
                            <Add />
                            <Amount>2</Amount>
                            <Remove />
                        </AmountContainer>
                        <Price>$50</Price>
                    </PriceDetail>
                </Product>
                <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>SubTotal</SummaryText>
                        <SubTotalPrice>$50</SubTotalPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>EStimated Shipping</SummaryText>
                        <SubTotalPrice>$5.80</SubTotalPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SubTotalPrice>$ -5.80</SubTotalPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText >Total</SummaryText>
                        <SubTotalPrice>$50</SubTotalPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart