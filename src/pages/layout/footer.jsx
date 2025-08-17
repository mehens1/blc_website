import React from "react";
import { Link, Links } from "react-router-dom";
import NavLinks from "../../constants/navLinks";
import logo from "/images/BLC-Logo.png";
import bg2 from "/images/bg-2.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa";

// BackToTopButton component
const BackToTopButton = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <a
          href="#top"
          className="fixed bottom-6 right-6 secondary-bg hover:bg-[#e64a19] text-white p-3 rounded shadow-lg transition"
          aria-label="Back to top"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4l-8 8h6v8h4v-8h6z" />
          </svg>
        </a>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="relative pt-12 pb-6 text-white primary-bg">
      <div
        // className="absolute inset-0 z-0 bg-center bg-cover"

        className="absolute inset-0 z-0 bg-center bg-cover pointer-events-none"
        style={{
          backgroundImage: `url('${bg2}')`,
          opacity: 0.08,
        }}
      />
      <div className="mb-6 text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="BLC Logo" className="object-cover w-28 h-28" />
        </div>
        <p className="max-w-md px-4 mx-auto text-sm text-gray-300">
          We bring over 2,600 journalists from the world’s leading publications
          to Web Summit. They’re part of the reason why the event...
        </p>
      </div>

      <div className="flex justify-center mb-8 space-x-6">
        {[FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaSpotify].map(
          (Icon, index) => (
            <div
              key={index}
              onClick={() => alert("_blank")}
              className="p-3 transition-all transform rounded cursor-pointer primary-bg-dark hover:primary-text duration-3000 hover:scale-150 group"
            >
              <Icon className="transition-colors group-hover:text-primary-text duration-3000" />
            </div>
          )
        )}
      </div>

      <ul className="flex justify-center p-6 mt-4 space-x-12 text-sm text-gray-400 cursor-pointer primary-bg-dark">
        {NavLinks.map((item, index) => (
          <li
            key={index}
            className={`secondary-text transition-colors duration-200 hover:primary-bg ${
              item.href === window.location.pathname ? "font-bold" : ""
            }`}
          >
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-sm text-center text-gray-400">
        © 2025,{" "}
        <a
          href="https://mehenscreatives.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-pink-500"
        >
          Mehens Creatives
        </a>
        . All Rights Reserved.
      </div>

      {/* Use BackToTopButton here */}
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
