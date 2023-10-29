import Link from "next/link";
import client from "@/graphql/client";
import { PRODUCT_LIST } from "@/graphql/products";
import { IProduct } from "@/types/product";
import CategoryList from "@/components/CategoryList";
import Navbar from "@/components/Navbar";

interface ProductListProps {
  products: IProduct[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div>
      <Navbar
        data={{
          backLabel: "Back to home",
          backPath: "/",
          pageTitle: "Product list page",
          itemsLength: products.length,
        }}
      />
      <div className="p-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => {
          const productAttributes = product.attributes;
          const seller = productAttributes.seller?.data.attributes.name;
          const categories = productAttributes?.categories?.data;
          const image =
            productAttributes.imageURL?.data.attributes.formats?.thumbnail?.url;

          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="bg-slate-900 border-2 border-solid border-slate-800 rounded p-4 flex flex-row h-auto justify-between min-w-min"
            >
              <div>
                <h1 className="font-bold text-2xl mb-2">
                  {productAttributes.name}
                </h1>
                <div className="mb-4">
                  <p className="font-bold">Seller :</p>
                  <span>{seller}</span>
                </div>
                <h1 className="mb-2 font-bold">Categories :</h1>
                <CategoryList categories={categories} />
              </div>
              <div className="px-2">
                <img
                  src={`http://localhost:1337${image}`}
                  className="h-auto w-full min-w-[100px]"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: PRODUCT_LIST });
  const products: IProduct[] = data.products.data;

  return {
    props: { products },
  };
};

export default ProductsList;
