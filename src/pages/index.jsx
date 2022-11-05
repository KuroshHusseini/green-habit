import Head from "next/head";
import { getPurchases } from "../services/purchasesServices";
import { PurchaseOverviewList } from "../components";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PurchaseOverviewList list={props.purchases} />
    </>
  );
}

export async function getServerSideProps() {
  const purchases = await getPurchases();
  return {
    props: { purchases }, // will be passed to the page component as props
  };
}
