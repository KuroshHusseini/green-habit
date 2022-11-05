import Head from "next/head";
import { getRewards } from "../services/rewardServices";
import { getPurchases } from "../services/purchasesServices";
import { getSuggestions } from "../services/suggestionServices";
import { PurchaseOverviewList, ProgressChart } from "../components";
import { Container } from "@nextui-org/react";
import "swiper/css";
export default function Home(props) {
  return (
    <Container css={{p:"$0"}} justify="center" alignItems="center">
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProgressChart datapoints={props.purchases} />
      <PurchaseOverviewList title="Suggestions" list={props.suggestions} />
      <PurchaseOverviewList title="Rewards" list={props.rewards} />
      <PurchaseOverviewList title="Purchases" list={props.purchases} />
    </Container>
  );
}

export async function getServerSideProps() {
  const rewards = await getRewards();
  const purchases = await getPurchases();
  const suggestions = await getSuggestions();
  return {
    props: { purchases, rewards, suggestions }, // will be passed to the page component as props
  };
}
