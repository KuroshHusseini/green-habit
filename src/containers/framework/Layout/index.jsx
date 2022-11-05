import React from "react";
import { Navigation } from "../Navigation";

export const Layout = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};
