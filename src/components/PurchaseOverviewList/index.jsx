import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { Carousel } from "../";
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
              src={item.src}
            />
          </Grid>
        ))}
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
