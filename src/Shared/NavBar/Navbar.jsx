import React from 'react';

const Navbar = () => {
    const navOptions = <>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300">Home</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300">About</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300">Academic</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300">Admission</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300">Result</a></li>
    </>;

    return (
        <div className='w-full z-50'>
            <div className="navbar bg-[#00809D] text-white font-serif justify-between">
                
                {/* Mobile Dropdown (Left) */}
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                </div>

                {/* Desktop Menu (Center) */}
                <div className="hidden lg:flex lg:mx-auto">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navOptions}
                    </ul>
                </div>

                {/* Right Spacer (empty to help justify-between layout) */}
                <div className="navbar-end lg:hidden"></div>
            </div>
        </div>
    );
};

export default Navbar;
