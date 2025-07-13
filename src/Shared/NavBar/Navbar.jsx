import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex">
            <div className=" ml-16 flex-1">
                <img className="btn sm:btn-sm md:btn-md lg:btn-lg btn-ghost normal-case" src="src/assets/Logo/Main Logo.png" alt="Bandarban Govt Mohila College" />
            </div>
            <div className='flex-1 text-2xl'>
                বান্দরবান সরকারি মহিলা কলেজ 
            </div>
            <div className="flex-1">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;