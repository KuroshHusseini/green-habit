import { Container, Grid, Link } from "@nextui-org/react";
import React from "react";
import { PurchaseOverviewListItem } from "../";

export const PurchaseOverviewList = ({ list }) => {
  return (
    <Grid.Container direction="row" gap={2}>
      {list.map((item) => (
        <Grid key={item.id}>
          <PurchaseOverviewListItem
            id={item.id}
            company={item.company}
            amount={item.amount}
            products={item.products}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};
