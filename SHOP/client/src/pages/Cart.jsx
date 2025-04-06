import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcment from "../components/Announcment"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Contaienr = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  transition: all 0.3s ease;
`

const Wrapper = styled.div`
  padding: 40px 20px;
`

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`

const TopButton = styled.button`
  padding: 12px 30px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: ${props => props.type === "filled" ? "#333" : "transparent"};
  color: ${props => props.type === "filled" ? "white" : "#333"};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.type === "filled" ? "#444" : "#e0e0e0"};
    transform: translateY(-3px);
  }
`

const TopTexts = styled.div`
  display: flex;
  align-items: center;
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 15px;
  font-size: 16px;
  color: #777;

  &:hover {
    color: #333;
  }
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`

const Info = styled.div`
  flex: 3;
  margin-right: 20px;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25 px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`

const Details = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
  font-weight: 600;
  font-size: 18px;
`

const ProductId = styled.span`
  font-size: 14px;
  color: #888;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductSize = styled.span`
  font-size: 14px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 0 15px;
`

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`

const Hr = styled.hr`
  background-color: #ddd;
  border: none;
  margin: 2px;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  justify-content: center;
  display: flex;
`

const SummaryTitle = styled.h1`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
  color: #333;
`

const SummaryItem = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" ? "700" : "400"};
  font-size: ${props => props.type === "total" ? "24px" : "16px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #333;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #444;
    transform: translateY(-3px);
  }
`

const Cart = () => {
  return (
    <Contaienr>
      <Announcment />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart</TopText>
            <TopText>Wish List</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.steamusercontent.com/ugc/940558793884864379/9FD15455A1576843D110504B4B548D2780127D4E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                <Details>
                  <ProductName>Jessie Shoes</ProductName>
                  <ProductId>Id: 231321233</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.steamusercontent.com/ugc/940558793884864379/9FD15455A1576843D110504B4B548D2780127D4E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                <Details>
                  <ProductName>Jessie Shoes</ProductName>
                  <ProductId>Id: 231321233</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.steamusercontent.com/ugc/940558793884864379/9FD15455A1576843D110504B4B548D2780127D4E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                <Details>
                  <ProductName>Jessie Shoes</ProductName>
                  <ProductId>Id: 231321233</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.steamusercontent.com/ugc/940558793884864379/9FD15455A1576843D110504B4B548D2780127D4E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                <Details>
                  <ProductName>Jessie Shoes</ProductName>
                  <ProductId>Id: 231321233</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.steamusercontent.com/ugc/940558793884864379/9FD15455A1576843D110504B4B548D2780127D4E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
                <Details>
                  <ProductName>Jessie Shoes</ProductName>
                  <ProductId>Id: 231321233</ProductId>
                  <ProductColor color="black" />
                  <ProductSize>Size: M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$122</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Contaienr>
  )
}

export default Cart