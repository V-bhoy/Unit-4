import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile(
        {height: "20vh"}
    )}
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({id,img,title}) => {
  return (
    <Container>
       <Image src={img}/>
       <Info>
           <Title>{title}</Title>
           <Button>SHOP NOW</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem