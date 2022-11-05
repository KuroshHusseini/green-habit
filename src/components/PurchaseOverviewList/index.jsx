import { Container, Spacer, Text } from "@nextui-org/react";
import { Carousel } from "../";

export const PurchaseOverviewList = ({ title, list }) => {
  return (
    <Container direction="column" gap={2}>
      <Spacer y={2} />
      <Text h2>{title}</Text>
      <Spacer y={1} />
      <Container gap={1}>
        {list || list.length === 0 ? (
          <Carousel list={list} />
        ) : (
          <Text blockquote color="0f111466">
            No voucher yet
          </Text>
        )}
      </Container>
    </Container>
  );
};
