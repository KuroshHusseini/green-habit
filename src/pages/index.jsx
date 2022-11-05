import Link from "next/link";
import { useRouter } from "next/router";

import { getPurchases } from "../services/purchasesServices";
import useAuthHandler from "../hooks/useAuthHandler";

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
        <ul>
          {props.purchases.map((purchase) => (
            <Link key={purchase.id} href={`/${purchase.id}`}>
              <li>{purchase.company}</li>
            </Link>
          ))}
        </ul>
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
