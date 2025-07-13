import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 text-3xl font-bold text-black">
            <div className="text-yellow-500 text-4xl">🏛</div>
            <span>
              Bandarban  <span className="text-yellow-500">Govt. Women</span> College
            </span>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Istiqbal Islamic Center is a vibrant and welcoming community hub
            that serves as a focal point for Muslims seeking spiritual growth,
            community engagement, and cultural enrichment.
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
            <li><span className="text-yellow-500"> ❯</span> Charity & Donation</li>
            <li><span className="text-yellow-500"> ❯</span> Mosque Development</li>
            <li><span className="text-yellow-500"> ❯</span> Muslim Matrimonial</li>
            <li><span className="text-yellow-500"> ❯</span> Special Child Care</li>
            <li><span className="text-yellow-500"> ❯</span> Quran Memorization</li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-600">
            <li> <span className="text-yellow-500"> ❯</span> About</li>
            <li> <span className="text-yellow-500"> ❯</span> Contact</li>
            <li> <span className="text-yellow-500"> ❯</span> Events</li>
            <li> <span className="text-yellow-500"> ❯</span> Services</li>
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
