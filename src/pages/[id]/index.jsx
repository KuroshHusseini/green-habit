import {
  Card,
  Container,
  Text,
  Grid,
  Row,
  Col,
  Spacer,
} from "@nextui-org/react";
import Head from "next/head";
import {
  getPurchases,
  getSinglePurchase,
} from "../../services/purchasesServices";

const getCarbonColor = (carbon) => {
  if (carbon > 0.35) {
    return "rgb(255, 99, 132)";
  }
  return "rgba(28, 163, 35)";
};

const PurchaseDetailPage = ({ purchase }) => {
  return (
    <Container>
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row align="center" justify="space-between" wrap="wrap" gap={1} css={{ margin: 0 }}>
        <Col css={{ width: 'auto' }}>
          <Text h1>{purchase.company}</Text>
        </Col>
        <Col css={{ width: 'auto' }}>
          <Row justify="flex-end">
            <div>
              <Text>Total price:</Text>
              <Text h4>€{purchase.amount}</Text>
            </div>
            <Spacer x={2} />
            <div>
              <Text>Avg. carbon rating:</Text>
              <Text h4 color={getCarbonColor(purchase.averageCarbon)}>
                {purchase.averageCarbon}
              </Text>
            </div>
          </Row>
        </Col>
      </Row>
      <Grid.Container gap={1} justify="flex-start">
        {purchase.products.map((product) => (
          <Grid xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <Card.Header>
                <Text h3>{product.product}</Text>
              </Card.Header>
              <Card.Body>
                <Row>
                  <div>
                    <Text>Price:</Text>
                    <Text weight="bold">€{product.amount}</Text>
                  </div>
                  <Spacer x={1} />
                  <div>
                    <Text>Carbon rating:</Text>
                    <Text color={getCarbonColor(product.carbon)} weight="bold">
                      {product.carbon}
                    </Text>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export async function getStaticPaths() {
  const data = await getPurchases();

  const paths = data.map((purchase) => ({
    params: { id: purchase.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const purchase = await getSinglePurchase(params.id);

  return { props: { purchase } };
}

export default PurchaseDetailPage;
