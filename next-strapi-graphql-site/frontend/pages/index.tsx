import client from "@/graphql/client";
import { PAGES_LIST } from "@/graphql/pages";
import Navbar from "@/components/Navbar";
import ListTree from "@/components/ListTree";
import { useRouter } from "next/router";
interface HomePageProps {
  pageDetails: any;
}

const Home = ({ pages }: any) => {
  const router = useRouter();
  const pageDetails = pages?.[0];
  const paths = pageDetails.attributes.paths?.data;
  const navbarData = pageDetails.sections?.find(
    (section: any) => section.__typename === "ComponentComponentsNavbar"
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      {router.pathname === "/" && <ListTree paths={paths} />}
      {router.pathname === "/products" && (
        <div>
          <Navbar data={navbarData} />
          <ListTree paths={paths} />
        </div>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: PAGES_LIST,
  });
  const pages = data.pages.data;

  return {
    props: {
      pages,
    },
  };
};

export default Home;
