import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { FiExternalLink } from "react-icons/fi";

const moreAboutCET = [
  {
    title: "History and Governance",
    text: "The College of Engineering Trivandrum (CET) is one of the most prestigious engineering institutions in Kerala, India. It was established in 1939 and is the first engineering college in the state, boasting a rich history of academic excellence. CET is governed by the Director of Technical Education Kerala, Govt. of Kerala and is affiliated with the APJ Abdul Kalam Technological University (KTU).",
  },
  {
    title: "Academic Programs",
    text: "The College of Engineering Trivandrum (CET) offers a comprehensive range of academic programs, including undergraduate (B.Tech and B.Arch), postgraduate (M.Tech, M.Plan, M.Arch, and MBA), and doctoral (Ph.D.) degrees across various engineering, architecture, and management disciplines. Currently, the College offers eight undergraduate, 30 postgraduate, and doctoral programmes. CET also provides courses and programs specifically designed for working professionals, allowing them to enhance their skills and knowledge while maintaining their careers.",
  },
  {
    title: "Campus and Facilities",
    text: "The College has a sprawling campus with state-of-the-art facilities, including well-equipped labs, workshops, libraries, and hostels. The labs are outfitted with modern equipment and software, providing hands-on learning opportunities and supporting research projects. CET's computer centre is a central facility that offers high-speed internet access, advanced computing resources, and software tools for students and faculty. CET has extensive sports facilities, including a football ground, basketball and volleyball courts.",
  },
  {
    title: "Research and Development",
    text: "CET strongly emphasizes research and development. Students and faculty conduct research projects in thrust areas of science and engineering. The institute has ongoing academic and research collaborations with governments and industries to keep pace with expanding frontiers of knowledge and global developments. The faculty and students at CET regularly publish their research findings in national and international journals, conferences, and symposiums. CET frequently organizes workshops, seminars, and conferences on contemporary research topics, bringing together experts from academia, industry, and government.",
  },
  {
    title: "Student Life",
    text: "CET is mainly known for its vibrant student community, which infuses the campus with energy and enthusiasm. Various clubs and societies focusing on cultural, technical, and social activities contribute to this lively atmosphere. The College hosts several annual events, including \"Drishti\" (technical fest) and \"Dhwani\" (cultural fest). CET strongly emphasizes sports, with facilities for football, basketball, volleyball, cricket, badminton, and more. The College has an active student support wing that represents the student body, organizes events, and addresses student concerns.",
  },
  {
    title: "Location and Accessibility",
    text: "The College of Engineering Trivandrum (CET) is conveniently located in Sreekariyam, Thiruvananthapuram, Kerala. The Trivandrum International Airport is approximately 11 kilometres away and takes around 25-30 minutes by car. The Trivandrum Central Railway Station is even closer, about 10 kilometres from the campus, and takes roughly 20-25 minutes by car. This proximity to significant transport hubs ensures that CET is easily accessible for students, faculty, and visitors.",
  },
];

const departments = [
  {
    name: "Department of Computer Science and Engineering (CSE)",
    text: "The CSE department at CET is at the forefront of digital innovation. Established in 1984, it is the oldest Computer Science school in Kerala, and has since then consistently produced industry leaders and cutting-edge research. The department's most prominent research interests are artificial intelligence, machine learning, cybersecurity, and big data analytics. With state-of-the-art laboratories and a faculty of distinguished experts, CSE at CET is shaping the future of computing technology.",
    image: "/assets/CSEDept.jpg",
    alt: "Computer Science and Engineering Department",
    link: "https://cse.cet.ac.in",
  },
  {
    name: "Department of Electrical Engineering (EE)",
    text: "As one of the oldest departments in CET, established in 1939, the EE department has a rich legacy of excellence. With a strong emphasis on sustainable energy solutions and power systems, it has been instrumental in driving innovation in areas such as smart grids, electric vehicles, and renewable energy integration. The department's research has practical applications that address real-world challenges, contributing significantly to the evolution of electrical engineering.",
    image: "/assets/EEDept.jpg",
    alt: "Electrical Engineering Department",
    link: "http://ee.cet.ac.in",
  },
  {
    name: "Department of Electronics and Communication Engineering (ECE)",
    text: "Since its inception in 1960, the ECE department has been a pioneer in the field of electronics and communication. Known for its advanced research facilities, the department focuses on areas like signal processing, wireless communications, VLSI design, and embedded systems. The ECE department has garnered numerous accolades for its contributions to both academia and industry, fostering innovation and technological advancement.",
    image: "/assets/ECEDept.jpg",
    alt: "Electronics and Communication Engineering Department",
    link: "http://ece.cet.ac.in",
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            About
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-gray-900 mt-4">
            College of Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Trivandrum
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-2xl mx-auto">
            Kerala's first engineering college — beacon of excellence in
            technical education since 1939.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/cet.jpg"
            alt="College of Engineering Trivandrum campus"
            className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <img
              src="/assets/logo_scrshot_black_alphabg.png"
              alt="CET Insignia"
              className="h-20 sm:h-28 w-auto mb-2"
            />
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-gray-900">
              College of Engineering Trivandrum
            </h2>
            <p className="mt-1 text-sm sm:text-lg font-medium text-blue-700">
              कर्म ज्यायो ह्यकर्मण: | action is superior to inaction
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gray-900">
            About the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              College
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-lg text-gray-900 leading-relaxed">
              <strong>The College of Engineering Trivandrum (CET),</strong>{" "}
              established in 1939, stands as a beacon of excellence in technical
              education.
            </p>
            <p className="mt-4 text-lg text-gray-900 leading-relaxed">
              For 85 years, CET has been at the forefront of engineering
              education in India, consistently producing top-tier professionals
              and innovative research.
            </p>
            <p className="mt-4 text-lg text-gray-900 leading-relaxed">
              Our institution's rich history is matched only by its commitment
              to the future. From its humble beginnings as the first engineering
              college in the state of Kerala, CET has grown into a prestigious
              institution recognized nationwide for its academic rigor and
              research contributions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-indigo-400/10 to-purple-400/20 rounded-3xl blur-2xl" />
            <img
              src="/assets/aravindPic.jpg"
              alt="College of Engineering Trivandrum"
              className="relative w-full h-auto rounded-3xl border border-white/60 shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gray-900">
            Vision and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Mission
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard className="p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
              Vision
            </h3>
            <p className="text-lg text-blue-600 leading-relaxed italic">
              National Level Excellence and International Visibility in Every
              Facet of Engineering Research and Education.
            </p>
          </GlassCard>
          <GlassCard className="p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
              Mission
            </h3>
            <ul className="space-y-3">
              {[
                "To facilitate quality transformative education in Engineering and Management.",
                "To foster innovations in Technology and its application for meeting global challenges.",
                "To pursue and disseminate Quality Research.",
                "To equip, enrich and transform students to be Responsible Professionals for better service to humanity.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <p className="text-lg text-blue-600 leading-relaxed italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gray-900">
            More About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              CET
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moreAboutCET.map((item) => (
            <GlassCard key={item.title} className="p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                {item.text}
              </p>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://cet.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlassCard className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-medium">
              Visit the main site
              <FiExternalLink size={16} />
            </GlassCard>
          </a>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gray-900">
            Organizing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Departments
            </span>
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-2xl mx-auto">
            The conference is jointly organized by three leading departments of
            College of Engineering Trivandrum. The collaboration of these three
            departments brings together a wealth of expertise, fostering
            interdisciplinary research and innovation in the rapidly evolving
            fields of computer science, electronics, and electrical engineering.
          </p>
        </div>
        <div className="space-y-12">
          {departments.map((dept, i) => (
            <GlassCard key={dept.name} className="overflow-hidden p-0" hover={false}>
              <div
                className={`grid lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-lg text-gray-900 leading-relaxed">
                    {dept.text}
                  </p>
                  <a
                    href={dept.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 font-medium hover:text-blue-500 transition-colors duration-200"
                  >
                    Visit the department site
                    <FiExternalLink size={16} />
                  </a>
                </div>
                <div className="lg:[direction:ltr]">
                  <img
                    src={dept.image}
                    alt={dept.alt}
                    className="w-full h-auto rounded-2xl border border-gray-200 shadow-lg object-cover"
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}