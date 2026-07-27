import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Touch
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Have a question about ICCC 2027? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-gray-900 mb-5">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                    <FiMail className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:iccc2027@cet.ac.in" className="text-sm text-gray-900 hover:text-blue-600 transition-colors">
                      iccc2027@cet.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-500 uppercase tracking-wider">Address</p>
                    <p className="text-sm text-gray-900">College of Engineering Trivandrum</p>
                    <p className="text-xs text-blue-600">Kulathoor, Thiruvananthapuram, Kerala 695583</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                    <FiPhone className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-500 uppercase tracking-wider">Conference Website</p>
                    <a href="https://iccc2027.cet.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-900 hover:text-blue-600 transition-colors">
                      iccc2027.cet.ac.in ↗
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h2>
              <div className="flex gap-3">
                {[
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaLinkedinIn, label: "LinkedIn" },
                  { icon: FaGithub, label: "GitHub" },
                  { icon: FaYoutube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-blue-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-gray-900 mb-5">
              Send a Message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">Your Name</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200" placeholder="Jane Smith" />
              </div>
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200" placeholder="jane@cet.ac.in" />
              </div>
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">Subject</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none" placeholder="Tell us more..." />
              </div>
              <Button variant="primary" className="w-full justify-center py-3.5">Send Message</Button>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
