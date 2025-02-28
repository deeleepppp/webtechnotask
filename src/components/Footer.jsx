import React from "react";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" px-4 py-12 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-6 w-6 text-red-500">
                <img
                  src="public/icons/logo.svg"
                  alt="Logo"
                  className="h-10 w-10 text-red-500"
                />
              </div>
              <span className="ml-2 text-white font-bold">chef's kitchen</span>
            </div>
            <p className="text-white text-sm mb-4">
              Learn to cook delicious meals with professional chefs guiding you
              every step of the way.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
              >
                <GrTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full h-8 w-8 bg-white flex items-center justify-center"
              >
                <AiFillInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

     
          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

       
          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Cooking Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Videos
                </a>
              </li>
            </ul>
          </div>


          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold text-lg text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

 
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2025 Chef's Kitchen. All rights reserved. Made with love for good
            food.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;