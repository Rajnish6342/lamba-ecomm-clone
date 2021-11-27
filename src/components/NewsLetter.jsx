import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #f5f5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color:white;
display: flex;
justify-content: space-between;
border: 1px solid #e0e0e0;
`;
const Button = styled.button`
border: none;
background-color: teal;
color: white;
flex:1;
transition:all .3s ease-in-out;
&:hover {
  background-color: white;
  color:teal;
}
`;
const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
outline-color:teal;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your product</Description>
      <InputContainer>
        <Input  type="email" placeholder="Your email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
