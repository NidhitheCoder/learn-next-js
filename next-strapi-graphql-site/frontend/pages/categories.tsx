import { CATEGORY_LIST } from "@/graphql/categories";
import client from "@/graphql/client";
import { CategoryData } from "@/types/categories";

interface CategoriesListProps {
  categories: CategoryData[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div>
      <h2>Categories List</h2>
      {categories.map((category) => {
        return (
          <div className="">
            <h1>{category.attributes.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: CATEGORY_LIST });

  const categories: CategoryData[] = data.categories.data;

  return {
    props: { categories },
  };
};

export default CategoriesList;
