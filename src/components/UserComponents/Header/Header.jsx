import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAbout = () => {
    navigate("/aboutus");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleService = () => {
    navigate("/services");
  };
  const handleCareer = () => {
    navigate("/career");
  };
  const handleContact = () => {
    navigate("/contactus");
  };
  const handleCollege = () => {
    navigate("/colleges");
  };

  return (
    <>
    <div className="header">
      <div className="logo">
        <img src="/Images/studycapLogo.png" alt="Logo" className="logo-image" />
      </div>
      <nav className="navbar">
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleCollege}>Colleges</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleService}>Services</li>
          {/* <li onClick={handleCareer}>Career</li> */}
          <li onClick={handleContact}>Contact Us</li>
        </ul>
        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
      </nav>
    </div>
    <div className="fixed hidden lg:flex flex-col top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              Facebook <FaFacebook className="mr-[16px]" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:mx-[0px] duration-300 bg-pink-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              Instagram <FaInstagram className="mr-[16px]" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="">
              Email <HiOutlineMail className="mr-[16px]" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="" target="_blank" rel="noopener noreferrer">
              Whatsapp <FaWhatsapp className="mr-[16px]" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
