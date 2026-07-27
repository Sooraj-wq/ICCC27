import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { FiUsers, FiBookOpen, FiGlobe } from "react-icons/fi";

const reasons = [
  {
    icon: FiUsers,
    title: "Networking",
    description: "Connect with over 155 leading researchers, academicians, and industry professionals from across India and abroad in a collaborative academic environment.",
  },
  {
    icon: FiBookOpen,
    title: "Learning",
    description: "Attend keynote talks, invited lectures, and peer-reviewed paper presentations covering emerging trends and interdisciplinary research in control, communication, and computing.",
  },
  {
    icon: FiGlobe,
    title: "Growth",
    description: "Present your work, gain feedback from domain experts, and forge collaborations that accelerate your research career and academic impact.",
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
              About ICCC 2027
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              The 7th International Conference on{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Control, Communication & Computing
              </span>
            </h1>
            <p className="mt-6 text-blue-600 leading-relaxed">
              ICCC 2027 aims to provide an international platform for researchers, academicians, industry professionals, and students to share innovative ideas, recent research findings, and technological advancements in the broad areas of Control, Communication, and Computing. The conference will feature keynote talks, invited lectures, and peer-reviewed paper presentations covering emerging trends and interdisciplinary research.
            </p>
            <p className="mt-4 text-blue-600 leading-relaxed">
              The conference is organized by the College of Engineering Trivandrum (CET), the first engineering college in the state of Kerala, established in 1939. The technical program focuses on areas including Intelligent Control Systems, Robotics and Automation, Signal Processing, Wireless Communication, VLSI and Embedded Systems, Advanced Algorithms, Cloud Computing and IoT, Cyber Physical Systems, Data Science, Artificial Intelligence and Machine Learning, Natural Language Processing, Computer Vision, Security and Privacy, Parallel and Distributed Computing, and Software Engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-display font-bold text-gray-900">155+</p>
                <p className="text-xs text-blue-500">Expected Participants</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-gray-900">132</p>
                <p className="text-xs text-blue-500">Faculty with PhD</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-gray-900">21</p>
                <p className="text-xs text-blue-500">IEEE Members on Faculty</p>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 lg:p-10 relative overflow-hidden">
            <GradientBlob className="top-[-100px] right-[-100px] opacity-20" />
            <div className="relative z-10">
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">College of Engineering Trivandrum</h3>
              <p className="text-blue-600 text-sm leading-relaxed">
                Established in 1939, CET was the first engineering college in Kerala. It is controlled by the Director of Technical Education, Govt. of Kerala. The college offers eight undergraduate, 30 postgraduate, and doctoral programmes. All UG programmes are accredited by NBA till December 2028.
              </p>
              <div className="grid grid-cols-6 gap-3 mt-6">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg ${
                      i % 3 === 0
                        ? "bg-gradient-to-br from-blue-400/30 to-blue-400/10 border border-blue-300"
                        : i % 3 === 1
                        ? "bg-gradient-to-br from-indigo-400/30 to-indigo-400/10 border border-indigo-500/20"
                        : "bg-gradient-to-br from-purple-400/30 to-purple-400/10 border border-purple-500/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-center mt-4 text-blue-500 text-xs">
                CET — Pioneering Engineering Education Since 1939
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Why Attend?
          </h2>
          <p className="mt-3 text-blue-600 max-w-md mx-auto">
            Three reasons to join us at CET Trivandrum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <GlassCard key={reason.title} className="p-6 sm:p-8 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-200 flex items-center justify-center mx-auto md:mx-0 mb-4">
                <reason.icon className="text-blue-600" size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-blue-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
