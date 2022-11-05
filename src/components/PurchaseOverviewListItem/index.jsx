import React from "react";

export const PurchaseOverviewListItem = ({ company, amount, products }) => {
  return (
    <div>
      <h1>{company}</h1>
      <div>amount: {amount}</div>
      <div>
        carbon score:{" "}
        {products.map((p) => p.carbon).reduce((a, b) => (a = a + b), 0)}
      </div>
    </div>
  );
};
