import React from "react";

const useAuthHandler = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const toggleIsSignIn = () => {
    setIsSignedIn((prevState) => !prevState);
  };

  return {
    isSignedIn,
    toggleIsSignIn,
  };
};

export default useAuthHandler;
