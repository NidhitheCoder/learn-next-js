import Link from "next/link";

const ListTree = ({ paths }: any) => (
  <ul>
    {paths.map(({ attributes }: any) => (
      <li key={`list-item-${attributes.pathName}`}>
        <Link
          className="text-xl text-blue-700 font-bold underline capitalize"
          href={attributes.pathURL}
        >
          {attributes.pathName}
        </Link>
      </li>
    ))}
  </ul>
);

export default ListTree;
