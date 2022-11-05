import Head from "next/head";
import { getPurchases } from "../services/purchasesServices";
import { PurchaseOverviewList, ProgressChart } from "../components";
import { Container } from "@nextui-org/react";

export default function Home(props) {
  return (
    <Container gap={1}   justify="center" alignItems="center">
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProgressChart datapoints={props.purchases} />
      <PurchaseOverviewList title="Suggestions" list={props.purchases} />
      <PurchaseOverviewList title="Rewards" list={props.purchases} />

    </Container>
  );
}

export async function getServerSideProps() {
  const purchases = await getPurchases();
  return {
    props: { purchases }, // will be passed to the page component as props
  };
}
