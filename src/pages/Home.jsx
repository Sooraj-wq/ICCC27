import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";
import Carousel from "../components/Carousel";
import { submissionDates } from "../data/schedule";
import { FiCalendar, FiMapPin, FiUsers, FiArrowRight } from "react-icons/fi";

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

      <section className="min-h-[80vh] flex flex-col justify-center pt-24 pb-2">
        <div className="max-w-[112rem] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm text-blue-500 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.5)] animate-pulse" />
                May 21–23, 2027 · Trivandrum, India
              </div>
              <h1 className="font-display text-[clamp(1.15rem,1.05rem+1.5vw,3rem)] font-bold leading-[1.15] text-balance text-gray-900">
                7<sup>th</sup> International Conference on{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  Control, Communication
                </span>{" "}
                and{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                  Computing
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-bold text-gray-800">
                Technical co-sponsor: IEEE Kerala Section
              </p>
              <p className="mt-6 text-xl sm:text-2xl text-gray-900 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                ICCC 2027 provides an international platform for researchers, academicians, industry professionals, and students to share innovative ideas, recent research findings, and technological advancements.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="https://cmt3.research.microsoft.com/ICCC2027/Submission/Manage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="text-base sm:text-lg px-8 py-3.5">
                    Submit
                    <FiArrowRight size={16} />
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1V2l3laCZ1Kr49SsrQjwV9p_gWwKSjMkY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="text-base sm:text-lg px-8 py-3.5">
                    Learn More
                    <FiArrowRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-indigo-400/10 to-purple-400/20 rounded-3xl blur-2xl" />
              <img
                src="/cet.jpg"
                alt="College of Engineering Trivandrum"
                className="relative w-full h-auto rounded-3xl border border-white/60 shadow-xl object-cover"
              />
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
                <p className="text-sm text-blue-500 uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-gray-900 font-medium text-base sm:text-lg">
                  {item.value}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-blue-600">
            About ICCC 2027
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-900 leading-relaxed">
              ICCC 2027 aims to provide an international platform for researchers, academicians, industry professionals, and students to share innovative ideas, recent research findings, and technological advancements in the broad areas of Control, Communication, and Computing. The conference will feature keynote talks, invited lectures, and peer-reviewed paper presentations covering emerging trends and interdisciplinary research.
            </p>
            <p className="mt-4 text-lg text-gray-900 leading-relaxed">
              The conference is organized by the College of Engineering Trivandrum (CET), the first engineering college in the state of Kerala, established in 1939. The technical program focuses on areas including Intelligent Control Systems, Robotics and Automation, Signal Processing, Wireless Communication, VLSI and Embedded Systems, Advanced Algorithms, Cloud Computing and IoT, Cyber Physical Systems, Data Science, Artificial Intelligence and Machine Learning, Natural Language Processing, Computer Vision, Security and Privacy, Parallel and Distributed Computing, and Software Engineering.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/conference-logo%20copy.svg"
              alt="ICCC 2027 Conference Logo"
              className="w-full max-w-xs sm:max-w-sm h-auto rounded-2xl border border-white/60 shadow-xl bg-white"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-gray-900">155+</p>
            <p className="text-sm text-blue-500">Expected Participants</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-gray-900">132</p>
            <p className="text-sm text-blue-500">Faculty with PhD</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display font-bold text-gray-900">21</p>
            <p className="text-sm text-blue-500">IEEE Members on Faculty</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Important Dates
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-[7px] lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/30 to-transparent" />
          <div className="space-y-10">
            {submissionDates.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div key={m.label} className="relative flex items-center">
                  <div className="absolute left-[3px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-deep border-2 border-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
                  <div
                    className={`pl-10 lg:w-1/2 lg:pl-0 ${
                      left ? "lg:text-right lg:pr-10" : "lg:ml-auto lg:pl-10"
                    }`}
                  >
                    <p className="text-base font-semibold text-amber-600 font-mono">
                      {m.date}
                    </p>
                    <p className="text-sm text-blue-600 mt-0.5">{m.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Conference Theme
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            A glimpse of what drives our technical program.
          </p>
        </div>
        <GlassCard className="p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm text-blue-500 font-mono">
            <span className="text-blue-600">const</span>
            <span className="text-indigo-600">iccc2027</span>
            <span className="text-blue-600">=</span>
          </div>
          <pre className="font-mono text-base leading-relaxed text-blue-500 overflow-x-auto">
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
              "AI & Machine Learning"
            </span>
            {","}
            {"\n"}
            {"    "}<span className="text-blue-600">
              "Wireless Communication"
            </span>
            {","}
            {"\n"}
            {"    "}<span className="text-blue-600">
              "Intelligent Control Systems"
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

      <SectionDivider className="my-6" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Previous Instances
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            Explore the proceedings of our past conferences.
          </p>
        </div>
        <Carousel>
          {[
            {
              label: "ICCC 2013",
              href: "https://ieeexplore.ieee.org/xpl/conhome/6720229/proceeding",
            },
            {
              label: "ICCC 2015",
              href: "https://ieeexplore.ieee.org/xpl/conhome/7428759/proceeding",
            },
            {
              label: "ICCC 2018",
              href: "https://ieeexplore.ieee.org/xpl/conhome/8510754/proceeding",
            },
            {
              label: "ICCC 2023",
              href: "https://ieeexplore.ieee.org/xpl/conhome/10164829/proceeding",
            },
            {
              label: "ICCC 2025",
              href: "https://ieeexplore.ieee.org/xpl/conhome/11076186/proceeding",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-start shrink-0 w-[85%] sm:w-[340px]"
            >
              <GlassCard className="p-6 text-center h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <p className="font-display text-xl font-semibold text-gray-900">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-blue-600">
                  View Proceedings
                </p>
              </GlassCard>
            </a>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
