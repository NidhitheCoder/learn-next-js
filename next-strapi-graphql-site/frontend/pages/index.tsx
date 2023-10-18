import Link from "next/link";
import client from "@/graphql/client";
import { SINGLE_PAGE } from "@/graphql/pages";
import Navbar from "@/components/Navbar";
interface HomePageProps {
  pageDetails: any;
}

const Home = ({ pageDetails }: HomePageProps) => {
  const navbarData = pageDetails.sections.find(
    (section: any) => section.__typename === "ComponentComponentsNavbar"
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar pageTitle={navbarData.pageTitle} />
      <ul>
        <li>
          <Link
            className="text-xl text-blue-700 font-bold underline"
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-blue-700 font-bold underline"
            href="/sellers"
          >
            Sellers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: SINGLE_PAGE,
    variables: { pageName: "Homepage" },
  });
  const pageDetails = data.pages.data[0].attributes;

  return {
    props: {
      pageDetails,
    },
  };
};

export default Home;
