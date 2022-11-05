import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import React from "react";

export const PurchaseOverviewListItem = ({ id, company, amount, imageSrc }) => {
  return (
    <Card
      isHoverable
      isPressable
      isBlurred
      as="a"
      href={`/${id}`}
      css={{ w: "300px", h: "300px" }}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={imageSrc}
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
