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
  return (
    <div>
      <h1>Product</h1>
      <p>{product.attributes.name}</p>
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
