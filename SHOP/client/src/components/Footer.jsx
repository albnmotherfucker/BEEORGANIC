import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
//LEFT SIDE FOOTER
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
`;
//LEFT SIDE FOOTER

//CENTER DIV

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
//CENTER DIV

//RIGHT DIV
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
//RIGHT DIV

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> BeeOrganic</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>USeful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Fushekosove, lagja Elisa{" "}
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +383 48 620 328
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> rama.erjon@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
