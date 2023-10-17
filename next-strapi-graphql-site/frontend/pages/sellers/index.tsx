import Link from "next/link";
import SellerItem from "@/components/SellerItem";
import client from "@/graphql/client";
import { SELLER_LIST } from "@/graphql/sellers";
import { ISeller } from "@/types/sellet";

interface SellerListProps {
  sellers: ISeller[];
}

const SellersList = ({ sellers }: SellerListProps) => {
  return (
    <div className="flex- flex-col items-center w-full p-6">
      <div className="flex flex-row justify-between mb-8">
        <Link href="/">Back to home</Link>
        <h1 className="text-center mb-4 text-3xl font-extrabold">
          Sellers list
        </h1>
        <p className="text-lime-500">{`${sellers.length} item(s)`}</p>
      </div>
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
