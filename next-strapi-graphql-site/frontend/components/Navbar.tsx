import Link from "next/link";

interface NavbarProps {
  backLabel?: string;
  backPath?: string;
  itemsLength?: number;
  pageTitle?: string;
}

const Navbar = ({
  backLabel,
  backPath = "",
  itemsLength,
  pageTitle,
}: NavbarProps) => (
  <div className="flex flex-row justify-between mb-8 p-6 w-full">
    {backLabel && <Link href={backPath}>{backLabel}</Link>}
    {pageTitle && (
      <h1 className="font-bold text-3xl text-slate-200 capitalize">
        {pageTitle}
      </h1>
    )}
    {itemsLength && <p className="text-lime-500">{`${itemsLength} item(s)`}</p>}
  </div>
);

export default Navbar;
