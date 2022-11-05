import { Card, Col, Text } from "@nextui-org/react";
import React from "react";

export const PurchaseOverviewListItem = ({ id, company, amount, products }) => {
  return (
    <Card
      isHoverable
      isPressable
      css={{ p: "$6", mw: "400px", mh: "400px" }}
      as="a"
      href={`/${id}`}
    >
      <Card.Body>
        <Col>
          <Text h3>{company}</Text>
          <Text b>amount: {amount}</Text>
          <Text b>
            {" "}
            carbon score:{" "}
            {products.map((p) => p.carbon).reduce((a, b) => (a = a + b), 0)}
          </Text>
        </Col>
      </Card.Body>
    </Card>
  );
};
