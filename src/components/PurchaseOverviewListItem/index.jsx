import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import React from "react";

export const PurchaseOverviewListItem = ({
  id,
  company,
  amount,
  products,
  src,
}) => {
  console.log(src);
  return (
    <Card>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={src}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#fff" size={12}>
                  {company}
                </Text>
                <Text color="#1CA323" size={12} b>
                  {amount}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
