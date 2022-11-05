import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { Carousel } from "../";

export const PurchaseOverviewList = ({ title, list }) => {
  return (
    <Container direction="column" gap={2}>
      <Spacer y={2} />
      <Text h1>{title}</Text>
      <Spacer y={2} />
      <Grid.Container gap={1}>
        {list ? (
          <Carousel list={list} imageSrc="https://www.placecage.com/300/300" />
        ) : (
          <Text blockquote color="0f111466">
            No voucher yet
          </Text>
        )}
      </Grid.Container>
    </Container>
  );
};
