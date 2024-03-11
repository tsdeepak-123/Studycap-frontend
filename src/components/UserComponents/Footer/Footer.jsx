import React from 'react';

function Footer() {
  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
          <div className="order-1 md:order-2 mr-4">
            <img src="/Images/studycapLogo.png" className="w-24 h-auto" alt="" /> {/* Adjust the width as needed */}
          </div>
          <div className="order-3">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
