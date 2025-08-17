import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../../components/forms/button';
import listItems from '../../constants/navLinks';
import logo from '/images/BLC-Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isRegisterPage = location.pathname === '/register';

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed flex justify-between items-center w-full border-white border-b-[0.1px] px-6 py-4 md:px-10 md:py-6 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <img
          src={logo}
          alt="BLC-Logo"
          className="w-16 h-16 object-cover shadow-2xl shadow-white"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 text-sm font-bold">
          {listItems.map((item, index) => (
        <li
  key={index}
  className={`secondary-text transition-colors duration-200 hover:primary-bg ${
    item.href === window.location.hash ? "font-bold" : ""
  } ${item.text === "Home" ? "text-lg md:text-xl" : "text-sm"}`}
>
  <a href={item.href}>{item.text}</a>
</li>

          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isRegisterPage
              ? 'text-green-500'
              : scrolled
              ? 'text-black'
              : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/register">
            <Button text="Register Now" />
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-[80px] left-0 w-full bg-white shadow-md z-40 md:hidden"
        >
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-sm font-bold">
            {listItems.map((item, index) => (
              <li
                key={index}
                className={`text-gray-700 transition-colors duration-200 hover:primary-text ${
                  item.href === window.location.hash ? 'font-bold' : ''
                }`}
              >
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.text}
                </a>
              </li>
            ))}
            <li>
              <Link to="/register">
                <Button text="Register Now" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
