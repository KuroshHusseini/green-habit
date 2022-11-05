import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { Carousel } from "../";

export const PurchaseOverviewList = ({ title, list }) => {
  console.log(
    "🚀 ~ file: index.jsx ~ line 6 ~ PurchaseOverviewList ~ list",
    list
  );
  return (
    <Container direction="column" gap={2}>
      <Spacer y={2} />
      <Text h1>{title}</Text>
      <Spacer y={2} />
      <Grid.Container gap={1}>
        <Carousel list={list} imageSrc="https://www.placecage.com/300/300" />
      </Grid.Container>
    </Container>
  );
};
