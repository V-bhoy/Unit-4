import  Announcement  from '../components/Announcement';
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive'

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile(
        {padding: "10px", flexDirection:"column" }
    )}
`;
const ImgContainer = styled.div`
     flex: 1;
`;
const Image = styled.img`
     width: 100%;
     height: 90vh;
     object-fit: cover;
     ${mobile(
        {height: "40vh"}
    )}
`;
const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;
   ${mobile(
        {padding: "10px"}
    )}
`;
const Title = styled.h1`
     font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
     font-weight: 100;
     font-size: 40px;
`;

const FilterContainer = styled.div`
     width: 70%;
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     ${mobile(
        {width: "100%"}
    )}
`;

const Filter= styled.div`
     display: flex;
     align-items: center;
`;

const FilterText = styled.span`
     font-weight: 200;
     font-size: 20px;
`;

const FilterColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     margin: 0px 5px;
     background-color: ${props=>props.color};
     cursor: pointer;
`;

const FilterSize = styled.select`
     margin-left : 5px;
`;

const FilterOption = styled.option`
     
`;
const AddContainer = styled.div`
     width: 60%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     ${mobile(
        {width: "100%"}
    )}
`;
const AmountContainer = styled.div`
     display: flex;
     align-items: center;
     font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
     padding: 15px;
     border: 2px solid teal;
     background-color: white;
     cursor: pointer;
     font-weight: bold;

     &:hover{
         background-color: whitesmoke;
     }
`;
const Product = () => {
   return <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
               <Image src="https://img.freepik.com/free-photo/charming-lady-jeans-dancing-pink-background-cute-curly-girl-fashionable-clothes-red-high-heels-laughs-isolated-backdrop_197531-18604.jpg?size=626&ext=jpg&ga=GA1.2.252166712.1651088395"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo facere dolore quae eaque aspernatur consectetur voluptatibus nulla non repellendus, qui quod! Minima, amet voluptatem et optio nostrum voluptas hic aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi adipisci et laboriosam reprehenderit ullam accusamus, officiis aperiam corrupti. Quis iure exercitationem in impedit officia cupiditate nam eveniet voluptate sunt!</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                <Filter>
                    <FilterText>Color</FilterText>
                    <FilterColor color="black"/>
                    <FilterColor color='lightblue'/>
                    <FilterColor color='lightgray'/>
                </Filter>
                <Filter>
                    <FilterText>Size</FilterText>
                    <FilterSize>
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
            
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
}

export default Product