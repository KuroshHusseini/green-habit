import React from "react";

export const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
