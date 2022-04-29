import React from 'react'
import styled from 'styled-components'
import {products} from '../db.json'
import Product from './Product';

const Container = styled.div `
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
         {products.map(item=>(<Product key={item.id} {...item}/>))}
    </Container>
  )
}

export default Products