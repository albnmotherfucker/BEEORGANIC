import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    url(img/bleta.jpg) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 40px;
    width: 30%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;

    &:focus {
        border-color: teal;
    }
`;

const Agreement = styled.span`
    font-size: 12px;
    color: #555;
    text-align: center;
    margin: 15px 0;
    width: 90%;

    b {
        color: teal;
        cursor: pointer;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: teal;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s;

    &:hover {
        background-color: #005f5f;
    }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;