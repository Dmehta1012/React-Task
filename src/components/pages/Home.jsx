import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">


      <section className="flex-1 bg-[#F3EFEA] text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3B3B3B]">
            Lorem ipsum dolor sit.
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <div className="space-x-4">
            <button className="bg-[#3B3B3B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2A2A2A] transition">
              Get Started
            </button>

            <button className="border border-[#3B3B3B] text-[#3B3B3B] px-6 py-3 rounded-xl hover:bg-[#3B3B3B] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#3B3B3B]">
           Lorem, ipsum dolor.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="text-[#6B6B6B] text-4xl mb-4">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-2 text-[#3B3B3B]">
                  {item.title}
                </h4>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="bg-[#E6E2DC] text-center py-12">
        <h3 className="text-2xl font-bold mb-4 text-[#3B3B3B]">
        Lorem ipsum dolor sit amet consectetur 
        </h3>

        <button className="bg-[#3B3B3B] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2A2A2A] transition">
          Join Now
        </button>
      </section>

    </div>
  );
}

/* FEATURES DATA */
const features = [
  {
    title: "Fast Development",
    desc: "Build apps faster with Tailwind utility classes."
  },
  {
    title: "Modern Design",
    desc: "Clean and professional UI components."
  },
  {
    title: "Easy Customization",
    desc: "Change layouts & styles without pain."
  },
];
