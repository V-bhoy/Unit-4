
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  background:
      url("https://images.pexels.com/photos/2778144/pexels-photo-2778144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 
      left no-repeat;
  background-color:rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-right: 5%;
  ${mobile(
        {backgroundSize: "cover", backgroundPosition: "center", justifyContent: "center"}
    )}
`;

const Wrapper = styled.div`
   width: 50%;
   padding: 20px;
   background-color: beige;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   ${mobile(
        {width: "75%"}
    )}
`;
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
      <Container>
          
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                  <Input placeholder='First name' />
                  <Input placeholder='Last name' />
                  <Input placeholder='Username' />
                  <Input placeholder='Email' />
                  <Input placeholder='Password' />
                  <Input placeholder='Confirm Password' />
                  <Agreement>
                      By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>
                  <Button>CREATE</Button>
              </Form>
          </Wrapper>
          
      </Container>
  );
}

export default Register;