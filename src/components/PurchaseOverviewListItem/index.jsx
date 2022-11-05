import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import React from "react";

export const PurchaseOverviewListItem = ({ id, company, amount, products }) => {
  console.log(
    "🚀 ~ file: index.jsx ~ line 5 ~ PurchaseOverviewListItem ~ company",
    company
  );
  console.log(
    "🚀 ~ file: index.jsx ~ line 5 ~ PurchaseOverviewListItem ~ products",
    products
  );
  return (
    // <Card
    //   isHoverable
    //   isPressable
    //   css={{ p: "$6", mw: "400px", mh: "400px" }}
    //   as="a"
    //   href={`/${id}`}
    // >
    //   <Card.Body>
    //     <Col>
    //       <Text h3>{company}</Text>
    //       <Text b>amount: {amount}</Text>
    //       <Text b>
    //         {" "}
    //         carbon score:{" "}
    //         {products.map((p) => p.carbon).reduce((a, b) => (a = a + b), 0)}
    //       </Text>
    //     </Col>
    //   </Card.Body>
    // </Card>
    <Card>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://loremflickr.com/g/320/240/paris,girl/all"
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
