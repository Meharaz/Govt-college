import React from 'react';
import img1 from '../../assets/Logo/Main Logo.png';
import img2 from '../../assets/Logo/Government_Seal_of_Bangladesh.svg';

const Navbar = () => {
  // --- links shared by desktop & mobile ---
  const navOptions = (
    <>
      <li><a className="hover:bg-yellow-500 transition-colors duration-300">Home</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors duration-300">About</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors duration-300">Academic</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors duration-300">Admission</a></li>
      <li><a className="hover:bg-yellow-500 transition-colors duration-300">Result</a></li>
    </>
  );

  return (
    <header className="w-full z-50">
      {/* ───────── Brand / Logo bar ───────── */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 py-3 px-4">
          {/* Govt seal */}
          <img
            src={img2}        
            alt="Government of Bangladesh"
            className="h-14 w-auto justify-items-end"
          />

          {/* College crest */}
          <img
            src={img1}  
            alt="College Logo"
            className="h-14 w-auto justify-stretch"
          />

          {/* Bilingual name */}
          <div className="text-center leading-tight ">
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">
             বান্দরবান সরকারি মহিলা কলেজ 
            </h1>
            <p className=" md:text-base font-semibold text-gray-800">
              Bandarban Govt. Women College
            </p>
          </div>
        </div>
      </div>

      {/* ───────── Main navigation bar ───────── */}
      <nav className="navbar bg-[#00809D] text-white font-serif justify-between">
        {/* Mobile dropdown */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:mx-auto">
          <ul className="menu menu-horizontal px-1 font-bold">
            {navOptions}
          </ul>
        </div>

        {/* Right spacer keeps justify-between balanced */}
        <div className="navbar-end lg:hidden"></div>
      </nav>
    </header>
  );
};

export default Navbar;
