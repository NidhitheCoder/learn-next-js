import Link from "next/link";
interface Navbar {
  backLabel?: string;
  backPath?: string;
  itemsLength?: number;
  pageTitle?: string;
}

interface NavbarProps {
  data?: Navbar;
}

const initialNavbarData = {
  backLabel: "",
  backPath: "",
  itemsLength: 0,
  pageTitle: "",
};

const Navbar = ({ data = initialNavbarData }: NavbarProps) => {
  const { backLabel, backPath = "", itemsLength, pageTitle } = data;

  return (
    <div className="flex flex-row justify-between mb-8 p-6 w-full">
      {backLabel && <Link href={backPath}>{backLabel}</Link>}
      {pageTitle && (
        <h1 className="font-bold text-3xl text-slate-200 capitalize">
          {pageTitle}
        </h1>
      )}
      {!!itemsLength && (
        <p className="text-lime-500">{`${itemsLength} item(s)`}</p>
      )}
    </div>
  );
};

export default Navbar;
