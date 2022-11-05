import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { getCustomers } from "../../services/customersServices";
import useAuthHandler from "../../hooks/useAuthHandler";

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
      <div>
        <div>
          <div>
            <input
              id="userEmail"
              placeholder="E-mail"
              required
              type="email"
              value={inputs.email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label htmlFor="userEmail">E-mail</label>
          </div>
          <div>
            <input
              id="userPass"
              placeholder="Password"
              required
              minLength={8}
              type="password"
              value={inputs.password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <label htmlFor="userPass">Password</label>
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
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
