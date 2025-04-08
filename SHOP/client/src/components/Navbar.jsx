import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 8vh;
  ${mobile({ height: "6.7vh" })}
`;

const Wrapper = styled.div`
  padding: 1.3vh 2.6vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "1.3vh 0vw" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1.8vh;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.07vh solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 3.3vw;
  padding: 0.65vh;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "6.5vw" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "2.5vh" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 1.8vh;
  cursor: pointer;
  margin-left: 3.3vw;
  ${mobile({ fontSize: "1.2vh", marginLeft: "1.3vw" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "2.1vh" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>BEEORGANIC</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
