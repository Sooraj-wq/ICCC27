import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/50 mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                I
              </span>
              <span className="font-display font-semibold text-lg text-gray-900">
                ICCC<span className="text-blue-600">'27</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The 7th International Conference on Control, Communication and Computing — organized by the College of Engineering Trivandrum.
            </p>
            <div className="flex gap-3">
              {[FaTwitter, FaLinkedinIn, FaGithub, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["About Us", "/about"], ["Schedule", "/schedule"], ["Speakers", "/speakers"], ["Registration", "/registration"]].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-blue-600" size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm tracking-wide mb-4">
              For Authors
            </h4>
            <ul className="space-y-2.5">
              {[["Call for Papers", "/call-for-papers"], ["Submission Guidelines", "/call-for-papers"], ["Committee", "/committee"], ["Venue & Travel", "/venue"], ["Contact Us", "/contact"]].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 text-sm tracking-wide mb-4">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Get the latest updates delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FiMapPin size={14} />
                <span>College of Engineering Trivandrum, Kerala</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FiMail size={14} />
                <span>iccc2027@cet.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} ICCC 2027. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
