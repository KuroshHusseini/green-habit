import { Card, Col, Text, Row } from "@nextui-org/react";

export const PurchaseOverviewListItem = ({ ...rest }) => {
  return (
    <Card
      isHoverable
      isPressable
      variant="bordered"
      as="a"
      href={`/${rest.id}`}
      css={{ w: "300px", h: "300px" }}
    >
      <Card.Body css={{ p: 0 }}>
       { rest.src && <Card.Image
          src={rest.src}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />}
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
                  {rest.header}
                </Text>
                <Text color="#1CA323" size={12} b>
                  {rest.summer}
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
