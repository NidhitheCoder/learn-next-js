import Link from "next/link";
import client from "@/graphql/client";
import { PRODUCT_LIST, SINGLE_PRODUCT } from "@/graphql/products";
import { IProduct } from "@/types/product";

interface ServerProps {
  params: {
    id: string;
  };
}

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  console.log(product);
  const productAttributes = product.attributes;
  const productImagePath =
    productAttributes.imageURL?.data.attributes.formats.medium?.url ||
    productAttributes.imageURL?.data.attributes.formats.thumbnail?.url;
  const productImageURL = `http://localhost:1337${productImagePath}`;
  const productCategories = productAttributes.categories?.data;
  const productSeller = productAttributes.seller?.data.attributes;

  return (
    <div className="grid grid-cols-6 w-full h-full min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500  to-purple-500">
      <div className="col-start-2 col-end-4 flex flex-col justify-center">
        <Link
          className="mb-8 font-extrabold text-blue-700 underline"
          href="/products"
        >
          Back
        </Link>
        <img className="w-full h-auto" src={productImageURL} />
      </div>
      <div className="col-start-4 col-end-6 flex justify-center items-center">
        <div className="p-8 w-full aspect-square">
          <div className="flex flex-row text-slate-300">
            <p>Product ID : </p>
            <p className="pl-2">{product.id}</p>
          </div>
          <p className="font-bold text-7xl mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            {productAttributes.name}
          </p>
          <h1 className="font-bold text-2xl mb-2">Categories</h1>
          <div className="flex flex-row gap-2 mb-8">
            {productCategories?.map(({ attributes: categoryAttributes }) => {
              return (
                <div
                  key={categoryAttributes.name}
                  className="px-4 py-1 rounded-3xl w-fit"
                  style={{ backgroundColor: categoryAttributes.color }}
                >
                  <p className="text-green-500 font-bold">
                    {categoryAttributes.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mb-8">
            <p className="mb-2 font-bold text-2xl">Description</p>
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              pariatur deleniti eaque quidem culpa, nemo neque doloribus quo
              iure voluptatibus officiis quod aliquid! Adipisci sunt
              necessitatibus ratione fugiat ad nisi.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-2xl">Seller</p>
            <p>{productSeller?.name}</p>
            <p>{productSeller?.address}</p>
            <p>{`Ph No: ${productSeller?.contactNumber}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: PRODUCT_LIST });
  const products: IProduct[] = data.products.data;
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: ServerProps) => {
  const { data } = await client.query({
    query: SINGLE_PRODUCT,
    variables: { productId: params.id },
  });
  const product: IProduct = data.products.data[0];

  return {
    props: { product },
  };
};

export default Product;
