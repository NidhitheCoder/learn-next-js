import SellerItem from "@/components/SellerItem";
import client from "@/graphql/client";
import { SELLER_LIST } from "@/graphql/sellers";
import { ISeller } from "@/types/sellet";

interface SellerListProps {
  sellers: ISeller[];
}

const SellersList = ({ sellers }: SellerListProps) => {
  console.log(sellers);
  return (
    <div className="flex- flex-col items-center w-full p-6">
      <h1 className="text-center mb-4">Sellers list</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
