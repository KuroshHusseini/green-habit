import React from "react";
import { PurchaseOverviewListItem } from "../";

export const PurchaseOverviewList = ({ list }) => {
  return (
    <ul>
      {list.map((i) => (
        <PurchaseOverviewListItem
          key={i.id}
          company={i.company}
          amount={i.amount}
          products={i.products}
        ></PurchaseOverviewListItem>
      ))}
    </ul>
  );
};
