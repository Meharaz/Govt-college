import React, { useState } from 'react';
import img1 from '../../assets/Logo/Main Logo.png';
import img2 from '../../assets/Logo/Government_Seal_of_Bangladesh.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = (
    <>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">প্রচ্ছদ</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">আমাদের সম্পর্কে</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">প্রশাসনিক</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">একাডেমিক</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">জার্নাল</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">নোটিশ বোর্ড</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">বার্ষিক প্রতিবেদন</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">নির্দেশনাবলী</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">গ্যালারি</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">সেবা বক্স</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors font-light duration-300">যোগাযোগ</a></li>
    </>
  );

  return (
    <header className="w-full z-50">
      {/* ───────── Logo Section ───────── */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 py-3 px-4">
          <img src={img2} alt="Gov Seal" className="h-14 w-auto" />
          <img src={img1} alt="College Logo" className="h-14 w-auto" />
          <div className="text-center leading-tight">
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">
              বান্দরবান সরকারি মহিলা কলেজ
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-800">
              Bandarban Govt. Women College
            </p>
          </div>
        </div>
      </div>

      {/* ───────── Navigation ───────── */}
      <nav className="navbar bg-[#00809D] text-white font-serif justify-between px-4">
        {/* Mobile Menu Button */}
        <div className="navbar-start lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:mx-auto">
          <ul className="menu menu-horizontal px-1 font-bold">
            {navOptions}
          </ul>
        </div>

        {/* Right placeholder for balance */}
        <div className="navbar-end lg:hidden"></div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white">
          <ul className="menu p-2">
            {navOptions}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
