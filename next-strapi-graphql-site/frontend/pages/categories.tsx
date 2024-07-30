import { CATEGORY_LIST } from "@/graphql/categories";
import client from "@/graphql/client";
import { CategoryData } from "@/types/categories";

interface CategoriesListProps {
  categories: CategoryData[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="w-full h-full min-h-screen bg-stone-800 p-8">
      <h1 className="underline-offset-2 w-full p-5 text-center">
        Categories List
      </h1>
      <div className="flex flex-row gap-12 pt-6">
        {categories.map((category) => {
          console.log(category);
          const image = category.attributes.icon.data.attributes.url;

          return (
            <div
              className="p-6 hover:before:opacity-30 hover:before:skew-x-3 rounded-sm border-2 flex justify-center items-center relative z-10 flex-col skew-y-12 before:bg-slate-400 before:content-normal before:opacity-60 before:absolute before:-skew-x-12 before:z-0 before:top-0 before:left-0 before:w-full before:h-full"
              style={{ borderColor: category.attributes.color }}
            >
              <img
                src={`http://localhost:1337${image}`}
                className="h-auto w-full min-w-[100px]"
              />
              <p>{category.attributes.name}</p>
            </div>
          );
        })}
      </div>
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
