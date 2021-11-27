import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:opacity .3s ease-in-out;

`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height:350px;
cursor: pointer;
display: flex;
justify-content: center;
position: relative;
align-items: center;
&:hover ${Info}{
  opacity: 1;
}
`;
const Circle = styled.div`
height:200px;
width:200px;
background-color:white;
position:absolute;
border-radius:50%;
align-self:flex-end;
`;
const Image = styled.img`
height:75%;
z-index:2;`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all .3s ease-in-out;
&:hover {
  background-color: #4fdcf5;
  transform:scale(1.1);
}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
