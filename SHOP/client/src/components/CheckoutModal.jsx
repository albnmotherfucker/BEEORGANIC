import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartRedux";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 12px;
  width: 100%;
  background-color: #333;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const ProductSummary = styled.div`
  margin-top: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const TotalPrice = styled.h3`
  margin-top: 20px;
  text-align: right;
`;

// ✅ Checkmark animation
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const SuccessMessage = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  color: #2ecc71;
  animation: ${fadeIn} 0.3s ease-in-out;

  &::before {
    content: '✔';
    display: inline-block;
    font-size: 2rem;
    margin-right: 10px;
  }
`;

const CheckoutModal = ({ onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    if (!formData.name || !formData.phone || !formData.city || !formData.address) {
      alert("Please fill in all the required fields.");
      return;
    }

    const orderData = {
      userId: "67f0442430cb41863aa7f468",
      products: cart.products.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      amount: cart.total,
      address: formData,
    };

    try {
      await axios.post("http://localhost:5000/api/orders", orderData, {
        headers: {
          token: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjA0NDI0MzBjYjQxODYzYWE3ZjQ2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0NDEyOTc4NywiZXhwIjoxNzQ0Mzg4OTg3fQ.DORbl72RDCojSy_zhKsBq5OvehTLW_sUA_2A6MVtNcc"}`,
        },
      });

      setOrderPlaced(true);
      setTimeout(() => {
        setOrderPlaced(false);
        dispatch(clearCart());
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Failed to place order: " + err.response?.data || "Unknown error");
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <h2>Checkout Summary</h2>

        <ProductSummary>
  {cart.products.map((product) => (
    <ProductItem key={product._id} style={{ flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span>{product.title} x {product.quantity}</span>
        <span>€{(product.price * product.quantity).toFixed(2)}</span>
      </div>
      <div style={{ fontSize: "0.9rem", color: "#666" }}>
        Madhësia: {product.size || "—"}
      </div>
    </ProductItem>
  ))}
  <TotalPrice>Total: €{cart.total.toFixed(2)}</TotalPrice>
</ProductSummary>


        <hr style={{ margin: "20px 0" }} />

        <Input placeholder="Full Name" name="name" onChange={handleChange} />
        <Input placeholder="Phone Number" name="phone" onChange={handleChange} />
        <Input placeholder="City" name="city" onChange={handleChange} />
        <Input placeholder="Address" name="address" onChange={handleChange} />

        {orderPlaced && <SuccessMessage>Porosi e sukseseshme!</SuccessMessage>}

        <Button onClick={handleSubmit}>Place Order</Button>
        <Button onClick={onClose} style={{ backgroundColor: "gray", marginTop: "10px" }}>Cancel</Button>
      </ModalContainer>
    </Overlay>
  );
};

export default CheckoutModal;
