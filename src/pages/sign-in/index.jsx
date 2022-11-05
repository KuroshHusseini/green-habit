import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { getCustomers } from "../../services/customersServices";
import useAuthHandler from "../../hooks/useAuthHandler";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Input,
  Spacer,
} from "@nextui-org/react";

const SignInPage = ({ customers }) => {
  const router = useRouter();
  const { toggleIsSignIn } = useAuthHandler();
  const [inputs, setInput] = useState({
    email: "lohalligan0@furl.net",
    password: "134",
  });

  const handleEmailChange = useCallback((inputValue) => {
    setInput((prevState) => ({
      ...prevState,
      email: inputValue,
    }));
  }, []);

  const handlePasswordChange = useCallback((inputValue) => {
    setInput((prevState) => ({
      ...prevState,
      password: inputValue,
    }));
  }, []);

  const clearInputs = useCallback(() => {
    setInput({
      email: "",
      password: "",
    });
  }, []);

  const handleSubmit = async () => {
    const checkUserExists = customers.find(
      (customer) =>
        customer.email === inputs.email && customer.password === inputs.password
    );

    if (checkUserExists) {
      toggleIsSignIn();
      router.replace("/");
    }
    clearInputs();
  };

  return (
    <main>
      <Container md css={{ height: "100vh" }}>
      <Row justify="center" align="center" css={{ height: "100%" }}>
        <Card css={{ mw: "400px" }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Col>
                <Input
                  css={{ width: "100%" }}
                  label="E-mail"
                  required
                  type="email"
                  initialValue={inputs.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                <Spacer y={0.5} />
                <Input
                  css={{ width: "100%" }}
                  label="Password"
                  required
                  minLength={8}
                  type="password"
                  initialValue={inputs.password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <Spacer y={0.5} />
                <Button onClick={handleSubmit} css={{ width: "100%" }}>Login</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </main>
  );
};

export async function getServerSideProps() {
  const customers = await getCustomers();
  return {
    props: { customers },
  };
}

export default SignInPage;
