import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">


      <section className="bg-[#F3EFEA] py-16 text-center">
        <h1 className="text-4xl font-bold text-[#3B3B3B] mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’d love to hear from you. Fill out the form below.
        </p>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">


        <div className="space-y-6 text-gray-600">
          <h2 className="text-2xl font-semibold text-[#3B3B3B]">
            Get in touch
          </h2>

          <p>
            Our team is ready to help you with any project or questions.
          </p>

          <div className="space-y-1">
            <p> Ahmedabad, India</p>
            <p> support@mywebsite.com</p>
            <p> +91 98765 43210</p>
          </div>

        </div>


        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold mb-4 text-[#3B3B3B]">
            Send a message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#3B3B3B]"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#3B3B3B]"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:border-[#3B3B3B]"
            />

            <button
              type="submit"
              className="w-full bg-[#3B3B3B] text-white py-3 rounded-xl hover:bg-[#2A2A2A] transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </section>

    </div>
  );
}
