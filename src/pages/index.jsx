import Link from "next/link";
import { useRouter } from "next/router";

import { getPurchases } from "../services/purchasesServices";
import useAuthHandler from "../hooks/useAuthHandler";
import { PurchaseOverviewList } from "../components";

export default function Home(props) {
  const router = useRouter();
  const { toggleIsSignIn } = useAuthHandler();

  const handleLogout = () => {
    toggleIsSignIn();
    router.replace("/sign-in");
  };

  return (
    <div>
      <main>
        <button onClick={handleLogout}>logout</button>
        <PurchaseOverviewList list={props.purchases}></PurchaseOverviewList>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const purchases = await getPurchases();
  return {
    props: { purchases }, // will be passed to the page component as props
  };
}
