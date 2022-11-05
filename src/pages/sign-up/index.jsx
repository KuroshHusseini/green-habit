import React, { useCallback, useState } from "react";
import axios from "axios";

async function createUser({ email, password }) {
  const res = await axios.post("api/auth/sign-up", { email, password });
  console.log("🚀 ~ file: index.jsx ~ line 6 ~ createUser ~ res", res)
}

const SignUpPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [inputs, setInput] = useState({
    email: "b@b.com",
    password: "12345678",
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
    if (isSignedIn) {
      return;
    } else {
      try {
        const res = await createUser(inputs);
        console.log("🚀 ~ file: index.jsx ~ line 54 ~ handleSubmit ~ res", res);
      } catch (error) {
        console.log(
          "🚀 ~ file: index.jsx ~ line 56 ~ handleSubmit ~ error",
          error.message
        );
      }
    }
    // clearInputs();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        required
        type="email"
        value={inputs.email}
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <input
        required
        minLength={8}
        type="password"
        value={inputs.password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpPage;
