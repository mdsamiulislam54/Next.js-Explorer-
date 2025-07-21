import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "This is the content of blog post 1.",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "This is the content of blog post 2.",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content: "This   is the content of blog post 3.",
    },
  ];
  return (
    <div>
      <p> this blog page</p>

      <ul>
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <li key={blog.id} className="mb-4 p-4 border rounded">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default page;
