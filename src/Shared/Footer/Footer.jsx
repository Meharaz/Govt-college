import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import img2 from '../../assets/Logo/Main Logo.png';

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 text-3xl font-bold text-black">
            <div className="text-yellow-500 text-4xl">
              <img src={img2} alt="" />
            </div>
            <span>
              বান্দরবান সরকারি মহিলা কলেজ
            </span>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            বান্দরবান সরকারি মহিলা কলেজ। এ অঞ্চলের প্রতিটি প্রান্তে ছড়িয়ে পড়েছে নারী শিক্ষার আলোকধারা। শিক্ষা, সংস্কৃতি ও মূল্যবোধে গর্বিত প্রতিষ্ঠান।
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-gray-200 hover:bg-yellow-500 text-black hover:text-white p-3 rounded-full transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-600">
            <li><span className="text-yellow-500"> ❯</span> কলেজ গড়ার ইতিহাস</li>
            <li><span className="text-yellow-500"> ❯</span> মহান স্বাধীনতা ও মানবাধিকার দিবস</li>
            <li><span className="text-yellow-500"> ❯</span> মহান শহীদ দিবস</li>
            <li><span className="text-yellow-500"> ❯</span> জাতীয় শোক দিবস</li>
            <li><span className="text-yellow-500"> ❯</span> মহান বিজয় দিবস</li>

          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-600">
            <li> <span className="text-yellow-500"> ❯</span> Ministry of Education</li>
            <li> <span className="text-yellow-500"> ❯</span> Directorate of Higher Education</li>
            <li> <span className="text-yellow-500"> ❯</span> National University</li>
            <li> <span className="text-yellow-500"> ❯</span> Chattogram Education Board</li>
            <li> <span className="text-yellow-500"> ❯</span> Our Blog</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-gray-600 mb-4">
            You will be notified when something new will appear.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address *"
              className="p-3 w-full bg-gray-100 text-black placeholder-gray-500 rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-600 text-white px-4 rounded-r-md hover:bg-yellow-500 transition">
              ❯
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-12 border-t border-gray-200 pt-6 text-gray-500 text-sm">
        © Copyright 2025 | KloudCore Ltd. 
      </div>
    </footer>
  );
}
