import { Blog } from "@/types";
import Link from "next/link";

interface BlogProps {
  blog: Blog;
}

interface Params {
  [key: string]: string;
}

export default function Blog({ blog }: BlogProps) {
  const blogDetails = blog.attributes;

  return (
    <div className="p-12">
      <h2 className="text-5xl font-extrabold underline pb-12">
        {blogDetails.title}
      </h2>
      <div className="mb-6">
        <span>Rating:</span>
        <span className="text-amber-400 text-base font-bold pl-4">
          {blogDetails.rating} Star(s)
        </span>
      </div>
      <p className="px-8 font-thin italic tracking-wider leading-8">
        {blogDetails.description}
      </p>
      <div className="my-8 font-bold">
        <span>Created On :</span>
        <span className="text-orange-500 pl-4">{blogDetails.updatedAt}</span>
      </div>
      <Link className="text-blue-800 font underline" href="/">
        == Home
      </Link>
    </div>
  );
}

// Tell next.js how many pages are there
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/blogs");
  const { data: blogs } = await res.json();

  const paths = blogs.map((blog: Blog) => ({
    params: { slug: blog.attributes.slug },
  }));

  return {
    paths,
    fallback: true, // fallback true leads to incremental page generation
  };
}

// Get the data for individual page
export async function getStaticProps({ params }: Params) {
  console.log(params);
  const slug = params;

  const res = await fetch(`http://localhost:1337/api/blogs?slug=${slug}`);

  const { data: blogs } = await res.json();

  return {
    props: {
      blog: blogs[0],
    },
  };
}
