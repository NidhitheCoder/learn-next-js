import Link from "next/link";
import client from "@/graphql/client";
import { PRODUCT_LIST, SINGLE_PRODUCT } from "@/graphql/products";
import { IProduct } from "@/types/product";
import CategoryList from "@/components/CategoryList";
import Navbar from "@/components/Navbar";

interface ServerProps {
  params: {
    id: string;
  };
}

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const productAttributes = product.attributes;
  const imageAttributeFormat =
    productAttributes.imageURL?.data.attributes.formats;

  const productImagePath =
    imageAttributeFormat?.medium?.url || imageAttributeFormat?.thumbnail?.url;
  const productImageURL = `http://localhost:1337${productImagePath}`;
  const productCategories = productAttributes.categories?.data;
  const productSeller = productAttributes.seller?.data.attributes;

  return (
    <div className="grid grid-cols-6 w-full h-full min-h-screen bg-gradient-to-r from-black via-slate-800 to-black">
      <Navbar
        data={{
          backLabel: "Back",
          backPath: "/products",
        }}
      />
      <div className="flex flex-col justify-center col-start-2 col-end-4">
        <img className="w-full h-auto max-w-lg" src={productImageURL} />
      </div>
      <div className="col-start-4 col-end-6 flex justify-center items-center">
        <div className="p-8 w-full aspect-square max-w-lg">
          <div className="flex flex-row text-slate-300">
            <p>Product ID : </p>
            <p className="pl-2">{product.id}</p>
          </div>
          <p className="font-bold text-7xl mb-4 bg-gradient-to-r from-slate-400 via-slate-700 to-slate-700 bg-clip-text text-transparent">
            {productAttributes.name}
          </p>
          <h1 className="font-bold text-2xl mb-2">Categories</h1>
          <CategoryList categories={productCategories} />
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
            <Link href="/sellers">{productSeller?.name}</Link>
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
