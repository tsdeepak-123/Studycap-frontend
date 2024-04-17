import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function Footer() {
 return (
    <div className="bg-slate-900">
      <div className="max-w-full mx-auto text-white py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm">
          {/* Logo Section */}
          <div className="order-1 md:order-2 mr-4">
            <img src="/Images/studycapLogo.png" className="w-32 h-auto" alt="Educational Consultancy Logo" />
          </div>
          {/* Links and Information Section */}
          <div className="order-3 flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Services</span>
              <span className="px-2 border-l">Consultancy Areas</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
            {/* Description Section */}
            <div className="md:ml-4">
              <p className="mb-4">Studycap is a dynamic education information site that operates by Studycap team.</p>
              {/* Company Info */}
              <div className="mb-2">
                <p>Stydycap</p>
                <p>Thamarassery</p>
                <p>Kozhikode,Kerala,673586</p>
              </div>
              <div className="mb-2 flex items-center">
                <HiOutlinePhone className="mr-2" /> <span>+91 89433 81709</span>
              </div>
              <div className="mb-2 flex items-center">
                <HiOutlineMail className="mr-2" /> <span>infostydycap@gmail.com</span>
              </div>
              {/* Social Media Links */}
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/yourconsultancy" className="text-white hover:text-gray-300"><FaFacebook /></a>
                <a href="https://twitter.com/yourconsultancy" className="text-white hover:text-gray-300"><FaTwitter /></a>
                <a href="https://www.instagram.com/yourconsultancy" className="text-white hover:text-gray-300"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Footer;
