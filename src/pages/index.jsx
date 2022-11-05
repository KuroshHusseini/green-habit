import Link from "next/link";
import { useRouter } from "next/router";

import { getPurchases } from "../services/purchasesServices";
import useAuthHandler from "../hooks/useAuthHandler";
import { PurchaseOverviewList } from "../components";
import { Button } from "@nextui-org/react";

export default function Home(props) {
  const router = useRouter();
  const { toggleIsSignIn } = useAuthHandler();

  const handleLogout = () => {
    toggleIsSignIn();
    router.replace("/sign-in");
  };

  return (
    <main>
      <Button onClick={handleLogout}>Logout</Button>
      <PurchaseOverviewList list={props.purchases}></PurchaseOverviewList>
    </main>
  );
}

export async function getServerSideProps() {
  const purchases = await getPurchases();
  return {
    props: { purchases }, // will be passed to the page component as props
  };
}
