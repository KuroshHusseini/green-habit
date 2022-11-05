import { Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import React from "react";
import { PurchaseOverviewListItem } from "../";

export const PurchaseOverviewList = ({ title, list }) => {
  return (
    <Container direction="column" gap={2}>
      <Spacer y={2} />
      <Text h1>{title}</Text>
      <Spacer y={2} />
      <Grid.Container gap={1}>
        {list.map((item) => (
          <Grid direction="row" key={item.id}>
            <PurchaseOverviewListItem
              id={item.id}
              company={item.company}
              amount={item.amount}
              products={item.products}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};
