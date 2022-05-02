//import styled from "styled-components";
import { Flex } from "./Styled";


export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <img src={item.image} alt="product"/>
        <h4>{item.title}</h4>
        <p>{item.brand}</p><span>Rs. {item.price}</span>
      </Flex>
    </>
  );
};
