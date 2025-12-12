import { Link } from "@tanstack/react-router";

 export const Navbar = () => {
  return (
    <header className="bg-[#FAF8F5] shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#3B3B3B]">
          MyWebsite
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-600">

          <Link
            to="/"
            className="hover:text-[#3B3B3B] transition"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="hover:text-[#3B3B3B] transition"
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#3B3B3B] transition"
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className="hover:text-[#3B3B3B] transition"
          >
            Admin
          </Link>

          {/* Login Button */}
          <Link
            to="/Login"
            className="bg-[#3B3B3B] text-white px-4 py-2 rounded-xl hover:bg-[#2A2A2A] transition"
          >
            Login
          </Link>
          <Link
            to="/Signup"
            className="bg-[#3B3B3B] text-white px-4 py-2 rounded-xl hover:bg-[#2A2A2A] transition"
          >
            Sign Up
          </Link>

        </nav>

      </div>
    </header>
  );
};
