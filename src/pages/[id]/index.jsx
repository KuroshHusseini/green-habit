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
import { DetailsPage } from "../../components";
import {
  getCustomers,
  getSingleCustomers,
} from "../../services/customersServices";
import {
  getPurchases,
  getSinglePurchase,
} from "../../services/purchasesServices";
import { getRewards, getSingleReward } from "../../services/rewardServices";
import {
  getSingleSuggestion,
  getSuggestions,
} from "../../services/suggestionServices";

const getCarbonColor = (carbon) => {
  if (carbon > 0.35) {
    return "rgb(255, 99, 132)";
  }
  return "rgba(28, 163, 35)";
};

const PurchaseDetailPage = ({ data }) => {
  if (
    (data.type === "reward" && data.summary) ||
    (data.type === "suggestion" && data.summary)
  ) {
    return <DetailsPage {...data} />;
  }

  return (
    <Container>
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={1}
        css={{ margin: 0 }}
      >
        <Col css={{ width: "auto" }}>
          <Text h1>{data.company}</Text>
        </Col>
        <Col css={{ width: "auto" }}>
          <Row justify="flex-end">
            <div>
              <Text>Total price:</Text>
              <Text h4>€{data.amount}</Text>
            </div>
            <Spacer x={2} />
            <div>
              <Text>Avg. carbon rating:</Text>
              <Text h4 color={getCarbonColor(data.averageCarbon)}>
                {data.averageCarbon}
              </Text>
            </div>
          </Row>
        </Col>
      </Row>
      <Grid.Container gap={1} justify="flex-start">
        {data?.products?.map((product) => (
          <Grid xs={12} sm={6} md={4} key={product.id}>
            <Card variant="flat">
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
  const rewards = await getRewards();
  const purchases = await getPurchases();
  const suggestions = await getSuggestions();
  const customers = await getCustomers();

  const newArr = [...rewards, ...purchases, ...suggestions, ...customers];
  const paths = newArr.map((purchase) => ({
    params: { id: purchase.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const reward = await getSingleReward(params.id);
  const purchase = await getSinglePurchase(params.id);
  const suggestion = await getSingleSuggestion(params.id);
  const customer = await getSingleCustomers(params.id);

  const finalData = reward || purchase || suggestion || customer;

  return {
    props: {
      data: { ...finalData },
    },
  };
}

export default PurchaseDetailPage;
