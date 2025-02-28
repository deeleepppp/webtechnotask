import { useState } from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({aboutRef,recipesRef,menuRef,contactRef}) {
  const [active, setActive] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
    
      <div className="flex items-center">
        <img
          src="/images/icon.png"
          alt="Logo"
          className="h-10 w-10 text-red-500"
        />
        <span className="text-white ml-2 text-xl font-[cursive] font-extrabold">
          chef's kitchen
        </span>
      </div>

     
      <div className="hidden md:flex items-center space-x-6">
        <a  onClick={() => scrollToSection(menuRef)} href="#menu" className="text-base text-[#eeeaded3] hover:text-white">
          Menu
        </a>
        <a  onClick={() => scrollToSection(aboutRef)} href="#about" className="text-base text-[#eeeaded3] hover:text-white">
          About Us
        </a>
        <a  onClick={() => scrollToSection(recipesRef)} href="#recipes" className="text-base text-[#eeeaded3] hover:text-white">
          Recipes
        </a>
        <a  onClick={() => scrollToSection(contactRef)} href="#contact" className="text-base text-[#eeeaded3] hover:text-white">
          Contact
        </a>
      </div>

 
      <div className="hidden md:flex items-center space-x-4">
        <div className="text-[#ab3036] font-bold text-lg">
          <BsTelephoneForward />
        </div>
        <a
          href="tel:+1-202-555-0149"
          className="text-white font-medium text-base hover:text-blue-300"
        >
          +1-202-555-0149
        </a>
        <div>
          <button
            onClick={() => setActive("login")}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-all ${
              active === "login" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            Log in
          </button>
          <button
            onClick={() => setActive("signup")}
            className={`cursor-pointer rounded-full px-4 py-2 m-2 text-sm transition-all ${
              active === "signup" ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

     
      <div className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FiMenu size={24} />
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <FiX
            size={24}
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="flex flex-col items-center space-y-4">
            <a href="#" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
              Menu
            </a>
            <a href="#" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
              Recipes
            </a>
            <a href="#" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className="flex items-center space-x-2">
              <BsTelephoneForward className="text-[#ab3036]" />
              <span className="text-white">+1-202-555-0149</span>
            </div>
            <button
              onClick={() => {
                setActive("login");
                setIsMenuOpen(false);
              }}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                active === "login" ? "bg-red-500 text-white" : "bg-white text-black"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => {
                setActive("signup");
                setIsMenuOpen(false);
              }}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                active === "signup" ? "bg-red-500 text-white" : "bg-white text-black"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}