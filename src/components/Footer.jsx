import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                I
              </span>
              <span className="font-display font-semibold text-lg text-white">
                ICCC<span className="text-blue-200">'27</span>
              </span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              The 7th International Conference on Control, Communication and Computing — organized by the College of Engineering Trivandrum.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["Schedule", "/schedule"], ["Speakers", "/speakers"], ["Registration", "/registration"]].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-blue-200" size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wide mb-4">
              For Authors
            </h4>
            <ul className="space-y-2.5">
              {[["Call for Papers", "/call-for-papers"], ["Submission Guidelines", "/call-for-papers"], ["Committee", "/committee"], ["Venue & Travel", "/venue"], ["Contact Us", "/contact"]].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <p>&copy; {new Date().getFullYear()} ICCC 2027. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/cmt-acknowledgement" className="hover:text-white transition-colors">CMT Acknowledgement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
