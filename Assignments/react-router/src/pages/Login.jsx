import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-image:url("https://images.pexels.com/photos/2778144/pexels-photo-2778144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ;
  background-position: center;
  background-color:rgba(255, 255, 255, 0.4);
  background-size: cover;
  //background-image: linear-gradient(green,rgba(255,255,255,0.5));
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-right: 5%;
  ${mobile(
        {justifyContent: "center"}
    )}
`;

const Wrapper = styled.div`
   width: 35%;
   padding: 20px;
   background-color: beige;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   ${mobile(
        {width: "75%"}
    )}
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Link= styled.a`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
           <Wrapper>
              <Title>SIGN IN</Title>
              <Form>
                  <Input placeholder='Email' />
                  <Input placeholder='Password' />
                  <Button>LOGIN</Button>
                  <Link>FORGOT PASSWORD?</Link>
                  <Link>CREATE A NEW ACCOUNT</Link>
              </Form>
          </Wrapper>
    </Container>
  )
}

export default Login;