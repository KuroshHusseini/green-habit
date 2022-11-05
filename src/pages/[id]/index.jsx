import { Container } from "@nextui-org/react";
import Head from "next/head";
import {
  getPurchases,
  getSinglePurchase,
} from "../../services/purchasesServices";

const PurchaseDetailPage = ({ purchase }) => {
  return (
    <Container gap={5}>
      <Head>
        <title>Green Habit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {purchase.company}
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
