import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: #f9f9f9;
    position: relative;


`;

const Image= styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
   // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Info= styled.div`
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   background-color: rgba(0,0,0,0.2);
   top: 0;
   left: 0;
   display : flex;
   justify-content: center;
   align-items: center;
   z-index: 3;
   border-radius: 8px;
   transition: all 0.6s ease-in;
   cursor: pointer;

   &:hover {
       opacity: 1;
   }
`;
const Icon= styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
   transition: all 0.5s ease;

   &:hover{
      background-color:#f9f9f9 ;
      transform: scale(1.1);
   }
`;

const Product = ({id, img}) => {
  return (
    <Container>
        <Image src={img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product