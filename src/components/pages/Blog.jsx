import React from "react";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">


      <section className="bg-[#F3EFEA] py-16 text-center">
        <h1 className="text-4xl font-bold text-[#3B3B3B] mb-2">
          Our Blog
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi!
        </p>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <div className="h-40 bg-[#E6E2DC]" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3B3B3B] mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>

                <button className="text-[#3B3B3B] font-medium hover:underline">
                  Read More →
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

const blogs = [
  {
    title: "Getting Started with React",
    description: "Learn the basics and build your first app."
  },
  {
    title: "Mastering Tailwind CSS",
    description: "Design clean, consistent UI with ease."
  },
  {
    title: "Infinite Scroll Guide",
    description: "Implement smooth data loading with pagination."
  },
  {
    title: "State Management",
    description: "Handle complex logic in modern React apps."
  },
  {
    title: "UI Animation Tips",
    description: "Make interfaces feel smooth and alive."
  },
  {
    title: "Working with APIs",
    description: "Fetch, cache and manage data efficiently."
  },
];
