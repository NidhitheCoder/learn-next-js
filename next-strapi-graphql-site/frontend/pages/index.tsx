import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <h1 className="mb-4 p-4 font-bold text-4xl text-violet-700">
        Welcome !!!
      </h1>
      <ul>
        <li>
          <Link
            className="text-xl text-blue-700 font-bold underline"
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-blue-700 font-bold underline"
            href="/sellers"
          >
            Sellers
          </Link>
        </li>
      </ul>
    </div>
  );
}
