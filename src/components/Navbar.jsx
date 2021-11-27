import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Container = styled.div`
height: 60px;
`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;
const Language = styled.span`
font-size:14px;
cursor: pointer;
display:flex;`;
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const SearchContainer = styled.div`
border:.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input = styled.input`
border:none;
outline:none;
`;
const Logo = styled.h1`
font-weight:bold;`;

const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left:25px;
`;

const Navbar = () => {
  const cart = useSelector(state => state.cart)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>E-commerce Clone</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem >Sign In</MenuItem>
          </Link>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
