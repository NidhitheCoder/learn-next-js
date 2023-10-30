import client from "@/graphql/client";
import { PAGES_LIST } from "@/graphql/pages";
import Navbar from "@/components/Navbar";
import ListTree from "@/components/ListTree";
interface HomePageProps {
  pageDetails: any;
}

const Home = ({ pages }: any) => {
  const pageDetails = pages?.[0].attributes;
  const paths = pageDetails.paths?.data;
  const navbarData = pageDetails.sections?.find(
    (section: any) => section.__typename === "ComponentComponentsNavbar"
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar data={navbarData} />
      <ListTree paths={paths} />
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
