import SellerItem from "@/components/SellerItem";
import client from "@/graphql/client";
import { SELLER_LIST } from "@/graphql/sellers";
import { ISeller } from "@/types/sellet";
import Navbar from "@/components/Navbar";

interface SellerListProps {
  sellers: ISeller[];
}

const SellersList = ({ sellers }: SellerListProps) => {
  return (
    <div className="flex- flex-col items-center w-full">
      <Navbar
        backLabel="Back to home"
        backPath="/"
        pageTitle="Sellers list"
        itemsLength={sellers.length}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {sellers.map((seller: ISeller) => (
          <SellerItem seller={seller} key={seller.id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: SELLER_LIST });
  const sellers = data.sellers.data;

  return {
    props: { sellers },
  };
};

export default SellersList;
