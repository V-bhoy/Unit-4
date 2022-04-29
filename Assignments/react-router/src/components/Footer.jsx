import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
  display: flex;
  ${mobile(
        {flexDirection: "column"}
    )}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
    
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile(
        {backgroundColor: "#eee"}
    )}
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile(
        {display: "none"}
    )}
`;

const Title = styled.h3`
    margin-bottom: 30px;

`;

const List = styled.ul`
    margin:  0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHINE*</Logo>
            <Desc>There are many variations of the fashion products available, but the majority have suffered alteration in some form, by injected ideas and artistic minds which are fabulous.</Desc>
            <SocialContainer>
                <Icon color="3B5999">
                    <Facebook />
                </Icon>
                <Icon color="E4405F">
                    <Instagram />
                </Icon>
                <Icon color="55ACEE">
                    <Twitter />
                </Icon>
                <Icon color="E60023">
                    <Pinterest />
                </Icon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Kids Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>622 Dixie Path, South Norway 98337
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>contact@shine.in
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
