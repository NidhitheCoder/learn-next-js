import { ProductCategoryField } from "@/types/product";

interface CategoryListProps {
  categories?: ProductCategoryField[];
}

const CategoryList = ({ categories }: CategoryListProps) => (
  <div className="flex flex-row gap-1 mb-6">
    {categories?.map(({ attributes }: ProductCategoryField) => {
      const iconUrl = `http://localhost:1337${attributes.icon.data.attributes.url}`;

      return (
        <div
          key={attributes.name}
          className="px-2 py-1 rounded-3xl w-max flex flex-row"
          style={{ backgroundColor: attributes.color }}
        >
          <img src={iconUrl} width={20} height={10} />
          <p className="text-slate-400 italic ml-1">{attributes.name}</p>
        </div>
      );
    })}
  </div>
);

export default CategoryList;
