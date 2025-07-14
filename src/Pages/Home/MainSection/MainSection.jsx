import React from 'react';
import { FaSearch, FaUsers, FaInfoCircle, FaBook } from 'react-icons/fa';
import { MdEmojiEvents, MdVolunteerActivism } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { HiOutlineNewspaper } from 'react-icons/hi2';

import profile1 from './image/profile1.jpeg';
import profile2 from './image/profile2.jpg';
import services2 from './image/services2.jpg';

const sections = [
  {
    title: "General Information",
    icon: <FaInfoCircle className="text-3xl text-blue-600" />,
    items: [
      "কলেজ গড়ার ইতিহাস",
      "এক নজরে সরকারি সিটি কলেজ, চট্টগ্রাম"
    ]
  },
  {
    title: "Extra Curricular Activities",
    icon: <MdEmojiEvents className="text-3xl text-blue-600" />,
    items: [
      "Cultural Club",
      "Drama Club",
      "Debate Club",
      "Language Club",
      "Career Club"
    ]
  },
  {
    title: "Counseling",
    icon: <PiChalkboardTeacher className="text-3xl text-blue-600" />,
    items: [
      "Day Science",
      "Business Studies",
      "Day Humanities",
      "Evening Humanities"
    ]
  },
  {
    title: "Voluntary organization",
    icon: <MdVolunteerActivism className="text-3xl text-blue-600" />,
    items: [
      "Rover Scout",
      "Red Crescent",
      "Ranger Guild",
      "BNCC"
    ]
  },
  {
    title: "National Events",
    icon: <FaUsers className="text-3xl text-blue-600" />,
    items: [
      "মহান স্বাধীনতা ও আন্তর্জাতিক মানবাধিকার দিবস",
      "মহান শহীদ দিবস",
      "জাতীয় শোক দিবস",
      "মহান বিজয় দিবস"
    ]
  },
  {
    title: "ভর্তির নোটিশ",
    icon: <BsClipboardData className="text-3xl text-blue-600" />,
    items: [
      "ভর্তির নোটিশ",
      "ভর্তির নোটিশ 2023-24",
      "ভর্তির নোটিশ 2024-25",
      "ভর্তির নোটিশ 2025-26"
    ]
  },
  {
    title: "Journals",
    icon: <FaBook className="text-3xl text-blue-600" />,
    items: [
      "JOURNAL 2021",
      "JOURNAL 2022",
      "JOURNAL 2023"
    ]
  },
  {
    title: "Others",
    icon: <HiOutlineNewspaper className="text-3xl text-blue-600" />,
    items: [
      "ANNUAL REPORT 2022-2023",
      "বার্ষিক কর্মপরিকল্পনা ২০২৩",
      "কলেজ বার্ষিক উন্নয়ন-২০২৩ ফাইনান্সিং শি"
    ]
  }
];

const MainSection = () => {
  return (
    <div className="font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:col-span-2">

          {/* Intro Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8 items-center">
              {/* Text */}
              <div className="md:col-span-3 space-y-4">
                <h1 className="text-2xl font-bold text-black">
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
              {/* Image */}
              <div className="md:col-span-2">
                <img src={services2} alt="College View" className="rounded-lg w-full h-auto object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Section Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                  {section.icon}
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                </div>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="hover:text-blue-700 transition">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Principal */}
          <div className="space-y-4">
            <div className="flex flex-col items-center text-center text-white p-6 shadow rounded bg-white">
              <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded">
                Principal
              </h4>
              <img src={profile1} alt="Principal Profile" className="w-60 h-60 object-cover mb-3 border-4 border-black" />
              <h4 className="text-xl font-bold text-black">MD Abdus Salam</h4>
              <p className="text-lg text-black">Principal, Govt. City College, Chattogram</p>
              <p className="text-black">" It is indeed a great moment for me to become a ... "</p>
            </div>

            {/* Vice Principal */}
            <div className="flex flex-col items-center text-center text-white p-6 shadow rounded bg-white">
              <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded">
                Vice-Principal
              </h4>
              <img src={profile2} alt="Vice Principal Profile" className="w-60 h-60 object-cover mb-3 border-4 border-black" />
              <h4 className="text-xl font-bold text-black">MD Abdus Salam</h4>
              <p className="text-lg text-black">Vice Principal, Govt. City College, Chattogram</p>
              <p className="text-black">" It is indeed a great moment for me to become a ... "</p>
            </div>
          </div>

          {/* Search Box */}
          <div className="flex border rounded overflow-hidden">
            <input type="text" placeholder="Search..." className="flex-1 p-2 outline-none" />
            <button className="bg-yellow-500 text-white px-3">
              <FaSearch />
            </button>
          </div>

          {/* Related Links */}
          <div className="flex flex-col items-center text-center text-white p-6 shadow rounded bg-white">
            <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded">
              Related Link
            </h4>
            <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-white text-black w-full pl-2 text-start py-2 rounded">
              অনলাইন বেতনবিল
            </h4>
            <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-white text-black w-full pl-2 text-start py-2 rounded">
              Ministry Of Education (SHED)
            </h4>
          </div>

          {/* Important Order */}
          <div className="flex flex-col items-center text-center text-white p-6 shadow rounded bg-white">
            <h4 className="text-2xl font-bold mb-2 bg-[#00809D] text-white w-full text-center py-2 rounded">
              Important Order
            </h4>
            <h4 className="text-md font-bold mb-2 bg-[#d9d9da] hover:bg-[#1d3a40] hover:text-white text-black w-full pl-2 text-start py-2 rounded">
              যৌন হয়রানি রোধে অভিযোগ সেল
            </h4>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainSection;
