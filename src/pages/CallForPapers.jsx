import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";

const tracks = [
  {
    title: "Track 1: Control Systems & Applications",
    topics: [
      "Architectures for Intelligent Control",
      "Automotive Control Systems",
      "Control of Aerospace Systems",
      "Control of Constrained Systems",
      "Control Theory and Applications",
      "Industrial Process Control & Automation",
      "Intelligent Autonomous Systems",
      "Manufacturing Systems Control",
      "Navigation, Guidance and Control",
      "Networked Control Systems",
      "Power Electronics and Drives",
      "Power System Operation and Control",
      "Renewable Energy and Smart Grid",
      "Transportation Electrification",
    ],
  },
  {
    title: "Track 2: Communication & Signal Processing",
    topics: [
      "Acoustic and Audio Signal Processing",
      "Biomedical Signal Processing",
      "Instrumentation and Control",
      "MEMS/NEMS",
      "Nanoelectronics",
      "Network Systems and Protocols",
      "Optoelectronics and Lightwave Systems",
      "RF and Microwave Systems",
      "Reliability Engineering",
      "Robotics and Automation",
      "Signal Processing for Communications",
      "VLSI and Embedded Systems",
      "Wireless Communication & Sensor Networks",
    ],
  },
  {
    title: "Track 3: Computing & Intelligent Systems",
    topics: [
      "Advanced Algorithms",
      "Big Data, Cloud Computing and IoT",
      "Blockchain Technologies",
      "Computational Geometry & Graphics",
      "Computer Networks",
      "Cyber Physical Systems",
      "Data Mining and Information Retrieval",
      "Data Science, AI and Machine Learning",
      "Digital Image Processing & Computer Vision",
      "Natural Language Processing",
      "Parallel and Distributed Computing",
      "Security and Privacy",
      "Software Engineering & Formal Methods",
      "System Software Design & Implementation",
    ],
  },
];

export default function CallForPapers() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Call for Papers
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Submit Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Work
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            We invite original, high-quality research contributions in control, communication, and computing.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Tracks &amp; Topics
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            Technical papers are solicited on topics pertaining to the scope of the conference, including but not limited to the following.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <GlassCard key={track.title} className="p-6">
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">
                {track.title}
              </h3>
              <ul className="space-y-2">
                {track.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 text-base text-blue-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-blue-600 text-base">
            Review Process: Single-blind &bull; Minimum 2 reviewers per paper
          </p>
        </div>
      </section>
    </div>
  );
}
