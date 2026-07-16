import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}

        <div>

          <h2 className="text-4xl font-extrabold tracking-wide">
            Nexora
          </h2>

          <p className="text-gray-400 leading-7 mt-5">
            Modern premium eCommerce platform built with
            React, Zustand, React Query and Tailwind CSS.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">

            <Link to="/" className="hover:text-white text-gray-400 transition">
              Home
            </Link>

            <br />

            <Link to="/products" className="hover:text-white text-gray-400 transition">
              Products
            </Link>

            <br />

            <Link to="/wishlist" className="hover:text-white text-gray-400 transition">
              Wishlist
            </Link>

            <br />

            <Link to="/orders" className="hover:text-white text-gray-400 transition">
              Orders
            </Link>

          </div>

        </div>

        {/* Categories */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Categories
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>Electronics</p>
            <p>Jewellery</p>
            <p>Men's Clothing</p>
            <p>Women's Clothing</p>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>📧 support@nexora.com</p>

            <p>📞 +91 9876543210</p>

            <p>📍 Mumbai, India</p>

          </div>

        </div>

      </div>

<div className="border-t border-gray-800">

  <div className="max-w-7xl mx-auto py-6 px-6 text-center">

    <p className="text-gray-500">
      © 2026 Nexora. All Rights Reserved.
    </p>

<div className="flex justify-center gap-6 mt-5 text-2xl">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-blue-500 hover:scale-125 transition duration-300"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-pink-500 hover:scale-125 transition duration-300"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-blue-400 hover:scale-125 transition duration-300"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-sky-400 hover:scale-125 transition duration-300"
  >
    <FaXTwitter />
  </a>

</div>

  </div>

</div>

    </footer>
  );
}

export default Footer;