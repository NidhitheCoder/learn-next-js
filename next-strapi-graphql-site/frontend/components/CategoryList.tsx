import { ProductCategoryField } from "@/types/product";

interface CategoryListProps {
  categories?: ProductCategoryField[];
}

const CategoryList = ({ categories }: CategoryListProps) => (
  <div className="flex flex-row gap-1 mb-6">
    {categories?.map(({ attributes }: ProductCategoryField) => (
      <div
        key={attributes.name}
        className="px-4 py-1 rounded-3xl w-fit"
        style={{ backgroundColor: attributes.color }}
      >
        <p className="text-slate-400 italic">{attributes.name}</p>
      </div>
    ))}
  </div>
);

export default CategoryList;
