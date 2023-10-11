import { Inter } from "next/font/google";
import { Blog } from "@/types";

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
            <div
              key={blog.id}
              className="w-3/4 p-2 bg-neutral-500 border-l-4 rounded"
            >
              <h1 className="text-slate-200 font-semibold capitalize pb-4">
                {blogData.title}
              </h1>
              <div className="p-2 bg-neutral-600 text-lime-600 rounded mb-2 max-h-32 overflow-hidden text-ellipsis">
                <p>{blogData.description}</p>
              </div>
              <p className="whitespace-nowrap">
                Rating: <span>{blogData.rating}</span>
              </p>
              <p>Created Date: {blogData.createdAt}</p>
            </div>
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
