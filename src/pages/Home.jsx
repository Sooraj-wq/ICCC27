import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";
import { FiCalendar, FiMapPin, FiUsers, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const highlights = [
  { icon: FiCalendar, label: "Date", value: "May 21–23, 2027" },
  { icon: FiMapPin, label: "Venue", value: "College of Engineering Trivandrum" },
  { icon: FiUsers, label: "Attendees", value: "155+ Researchers" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <GradientBlob className="top-[-200px] left-[-150px]" />
      <GradientBlob className="bottom-[-300px] right-[-200px]" />

      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-blue-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.5)] animate-pulse" />
              May 21–23, 2027 · Trivandrum, India
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              7th International Conference on{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Control, Communication
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                Computing
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-600 max-w-xl leading-relaxed">
              ICCC 2027 provides an international platform for researchers, academicians, industry professionals, and students to share innovative ideas, recent research findings, and technological advancements.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" className="text-sm sm:text-base px-8 py-3.5">
                Register Now
                <FiArrowRight size={16} />
              </Button>
              <Link to="/about">
                <Button variant="secondary" className="text-sm sm:text-base px-8 py-3.5">
                  Learn More
                  <FiArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item) => (
            <GlassCard key={item.label} className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-200 flex items-center justify-center shrink-0">
                <item.icon className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-blue-500 uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-gray-900 font-medium text-sm sm:text-base">
                  {item.value}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Conference Theme
          </h2>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            A glimpse of what drives our technical program.
          </p>
        </div>
        <GlassCard className="p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-xs text-blue-500 font-mono">
            <span className="text-blue-600">const</span>
            <span className="text-indigo-600">iccc2027</span>
            <span className="text-blue-600">=</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed text-blue-500 overflow-x-auto">
            <span className="text-purple-600">{`{`}</span>
            {"\n"}
            {"  "}<span className="text-indigo-600">theme</span>:{" "}
            <span className="text-blue-600">
              "Control, Communication & Computing"
            </span>
            {","}
            {"\n"}
            {"  "}<span className="text-indigo-600">focus</span>: [
            {"\n"}
            {"    "}<span className="text-blue-600">
              "Intelligent Control Systems"
            </span>
            {","}
            {"\n"}
            {"    "}<span className="text-blue-600">
              "Wireless Communication"
            </span>
            {","}
            {"\n"}
            {"    "}<span className="text-blue-600">
              "AI & Machine Learning"
            </span>
            {","}
            {"\n"}
            {"    "}<span className="text-blue-600">
              "VLSI & Embedded Systems"
            </span>
            {"\n"}
            {"  ]"},
            {"\n"}
            {"  "}<span className="text-indigo-600">date</span>:{" "}
            <span className="text-blue-600">"May 21–23, 2027"</span>
            {","}
            {"\n"}
            {"  "}<span className="text-indigo-600">location</span>:{" "}
            <span className="text-blue-600">"Trivandrum, India"</span>
            {"\n"}
            <span className="text-purple-600">{`}`}</span>
          </pre>
        </GlassCard>
      </section>
    </div>
  );
}
