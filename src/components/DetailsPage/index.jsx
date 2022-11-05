import React from "react";
import Image from "next/image";
import { Card, Col, Container, Spacer, Text } from "@nextui-org/react";

export const DetailsPage = ({ src, header, summary, description }) => {
  return (
    <div
      style={{
        paddingTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spacer y={10} />
      <Card css={{ mw: "400px", p: "$10" }} variant="flat">
        <Card.Header>
          <Col>
            {src && <Image src={src} alt="image" width={500} height={300} />}
            <Text h2>{header}</Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Text h3 b>{summary}</Text>
          <Text h4 blockquote>{description}</Text>
        </Card.Body>
      </Card>
    </div>
  );
};
