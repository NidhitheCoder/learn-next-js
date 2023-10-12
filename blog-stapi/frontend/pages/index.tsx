import { Inter } from "next/font/google";
import { Blog } from "@/types";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  blogs: Blog[];
}

export default function Home({ blogs }: HomeProps) {
  console.log("This is client side", blogs);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-4 text-3xl text-red-500 font-bold">Posts</h1>
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        {blogs?.map((blog: Blog) => {
          const blogData = blog.attributes;

          return (
            <Link
              className="w-1/4 p-2 bg-neutral-500 border-l-8 rounded"
              href={blogData.slug}
              key={blog.id}
            >
              <h1 className="text-blue-700 font-semibold capitalize pb-2">
                {blogData.title}
              </h1>
              <p className="whitespace-nowrap">
                Rating: <span>{blogData.rating}</span>
              </p>
              <p>Created Date: {blogData.createdAt}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  console.log("This is server side");

  // get blogs from our api
  const res = await fetch("http://localhost:1337/api/blogs");
  const { data: blogs } = await res.json();
  console.log(blogs);

  return {
    props: { blogs },
  };
}
