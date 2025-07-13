import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import profile1 from './image/profile1.jpeg';
import profile2 from './image/profile2.jpg';
import servicehero from './image/servicehero.jpg';
import services1 from './image/services1.jpg';
import services2 from './image/services2.jpg';
const MainSection = () => {
    return (
        <div className="font-sans">


            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="lg:col-span-2">

                    {/* Gallery/Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8 items-center">
                        {/* Text Content - 60% on md and up */}
                        <div className="md:col-span-3 space-y-4">
                            <h1 className="text-2xl md:text-2xl font-bold text-black">
                                Welcome to Government City College
                            </h1>
                            <p className="text-gray-700 text-justify leading-relaxed">
                                Welcome to our website — "Enter in quest of knowledge, go forward in the service of the nation."
                                For the flourishment of human life, two things are equally important — one is family and the other is an educational institution.
                                Besides developing the latent talents of a student, an educational institution prepares them to face life's challenges.
                                In this regard, a quality institution ensures a successful life both for the teacher and the taught.
                                Govt. City College, Chittagong is one of the highest seats of learning in the country.
                                Here, students get ample opportunities to acquire knowledge and updated information...
                            </p>
                        </div>

                        {/* Image - 40% on md and up */}
                        <div className="md:col-span-2">
                            <img src={services2} alt="Prayer Area" className="rounded-lg w-full h-auto object-cover shadow" />
                        </div>
                    </div>


                    {/* Icon Services */}
                    <h3 className="text-xl font-semibold mb-4">ADD YOUR HEADING TEXT HERE</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-semibold">SPECIAL CHILD CARE</h4>
                            <p className="text-sm text-gray-600">Courses specially designed for children and beginners.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-semibold">CHARITY & DONATION</h4>
                            <p className="text-sm text-gray-600">Support Quran education with your donations.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow">
                            <h4 className="font-semibold">EDUCATION FOR PURE</h4>
                            <p className="text-sm text-gray-600">Islamic guidance and memorization for the devoted.</p>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <h3 className="text-xl font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="space-y-4">
                        <div className="bg-white border rounded p-4 shadow">
                            <button className="flex justify-between w-full font-medium text-left">
                                <span>MY CHILD SAYS QURAN VERSES WITHOUT HELPING HAND</span>
                                <FaChevronDown />
                            </button>
                            <p className="text-sm text-gray-600 mt-2">
                                Independent dedication to memorization is a key factor and often brings out the best in students.
                            </p>
                        </div>
                        <div className="bg-white border rounded p-4 shadow">
                            <button className="flex justify-between w-full font-medium text-left">
                                <span>PLANNING CHARITY AND ISLAMIC WORKS? WE ACCEPT DONATION</span>
                                <FaChevronDown />
                            </button>
                        </div>
                        <div className="bg-white border rounded p-4 shadow">
                            <button className="flex justify-between w-full font-medium text-left">
                                <span>THOSE WHO EXPERIENCED THE ART, ALL TALKED ABOUT THE BEST</span>
                                <FaChevronDown />
                            </button>
                        </div>
                        <div className="bg-white border rounded p-4 shadow">
                            <button className="flex justify-between w-full font-medium text-left">
                                <span>I UNDERSTAND YOUR POINT, LET'S UNDERSTAND THE REST</span>
                                <FaChevronDown />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-6 ">
                    {/* Teachers Section */}
                    <div className="space-y-4">
                        {/* Teacher 1 */}
                        <div className="flex flex-col items-center text-center  text-white p-6 shadow rounded">
                            <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded font-normal">
                                Principal
                            </h4>
                            <img
                                src={profile1}
                                alt="MD Abdus Salam"
                                className="w-60 h-60  object-cover mb-3 border-4 border-black"
                            />
                            <h4 className="text-xl font-bold text-black">MD Abdus Salam</h4>
                            <p className="text-lg  text-black">Principal, Govt. City College, Chattogram</p>
                            <p className=' text-black'>" It is indeed a great moment for me to become a ... "</p>
                        </div>

                        {/* Teacher 1 */}
                        <div className="flex flex-col items-center text-center  text-white p-6 shadow rounded">
                            <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded font-normal">
                                Vice-Principal
                            </h4>
                            <img
                                src={profile2}
                                alt="MD Abdus Salam"
                                className="w-60 h-60  object-cover mb-3 border-4 border-black"
                            />
                            <h4 className="text-xl font-bold text-black">MD Abdus Salam</h4>
                            <p className="text-lg  text-black">Principal, Govt. City College, Chattogram</p>
                            <p className=' text-black'>" It is indeed a great moment for me to become a ... "</p>
                        </div>



                    </div>

                    {/* Search */}
                    <div className="flex border rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 p-2 outline-none"
                        />
                        <button className="bg-yellow-500 text-white px-3">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Related Link */}
                    <div className="flex flex-col items-center text-center  text-white p-6 shadow rounded">
                        <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded font-normal">
                            Related Link
                        </h4>
                        <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-[white] text-black w-full pl-2 text-start py-2 rounded font-normal">
                            অনলাইন বেতনবিল
                        </h4>
                        <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-[white] text-black w-full pl-2 text-start py-2 rounded font-normal">
                            Ministry Of Education (SHED)
                        </h4>

                    </div>
                    <div className="flex flex-col items-center text-center  text-white p-6 shadow rounded">
                        <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded font-normal">
                            Important Order
                        </h4>
                        <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-[white] text-black w-full pl-2 text-start py-2 rounded font-normal">
                            যৌন হয়রানি রোধে অভিযোগ সেল
                        </h4>


                    </div>

                </aside>


            </div>
        </div>
    );
};

export default MainSection;
