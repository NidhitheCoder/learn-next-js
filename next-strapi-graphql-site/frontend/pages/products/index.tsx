import Link from "next/link";
import client from "@/graphql/client";
import { PRODUCT_LIST } from "@/graphql/products";
import { IProduct } from "@/types/product";

interface ProductListProps {
  products: IProduct[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl text-slate-200">Product list page</h1>
      <div className="p-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => {
          const productAttributes = product.attributes;
          const seller = productAttributes.seller?.data.attributes.name;
          const categories = productAttributes?.categories?.data;
          const image =
            productAttributes.imageURL?.data.attributes.formats.thumbnail.url;

          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="bg-slate-400 border-2 border-solid border-slate-100 rounded p-4 flex flex-row h-auto justify-between min-w-min"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                  {categories?.map(({ attributes: categoryAttributes }) => {
                    return (
                      <div
                        key={categoryAttributes.name}
                        className="px-4 py-1 rounded-3xl w-fit"
                        style={{ backgroundColor: categoryAttributes.color }}
                      >
                        <p>{categoryAttributes.name}</p>
                      </div>
                    );
                  })}
                </div>
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
