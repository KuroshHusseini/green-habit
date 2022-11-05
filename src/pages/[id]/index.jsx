import React from "react";
import {
  getPurchases,
  getSinglePurchase,
} from "../../services/purchasesServices";

const PurchaseDetailPage = ({ purchase }) => {
  return <div>{purchase.company}</div>;
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
