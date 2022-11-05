import { Card, Col, Text, Row } from "@nextui-org/react";

export const PurchaseOverviewListItem = ({
  id,
  company,
  amount,
  products,
  src,
}) => {
  return (
    <Card
      isHoverable
      isPressable
      as="a"
      href={`/${id}`}
      css={{ w: "300px", h: "300px" }}
    >
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
                <Text color="#fff" size={14}>
                  {company}
                </Text>
                <Text color="#1CA323" size={12} b>
                  {/*averageCarbon*/ "this is a placeholder yay kurosh "}gr CO
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
