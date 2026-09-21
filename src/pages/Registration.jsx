import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import { FiClock } from "react-icons/fi";

const feeRows = [
  {
    category: "Indian Author (Academia)",
    earlyIEEE: "₹8,000",
    earlyNonIEEE: "₹9,500",
    stdIEEE: "₹9,000",
    stdNonIEEE: "₹10,500",
  },
  {
    category: "Indian Author (Industry)",
    earlyIEEE: "₹9,000",
    earlyNonIEEE: "₹10,500",
    stdIEEE: "₹10,000",
    stdNonIEEE: "₹11,500",
  },
  {
    category: "Indian Student Author",
    earlyIEEE: "₹7,500",
    earlyNonIEEE: "₹8,500",
    stdIEEE: "₹8,500",
    stdNonIEEE: "₹9,500",
  },
  {
    category: "Indian Non-Author Attendee",
    earlyIEEE: "₹6,000",
    earlyNonIEEE: "₹7,000",
    stdIEEE: "₹7,000",
    stdNonIEEE: "₹8,000",
  },
  {
    category: "Indian Author — Additional Paper Rate*",
    earlyIEEE: "₹2,000/paper",
    earlyNonIEEE: "₹2,000/paper",
    stdIEEE: "₹3,000/paper",
    stdNonIEEE: "₹3,000/paper",
  },
  {
    category: "Foreign Author",
    earlyIEEE: "$250",
    earlyNonIEEE: "$300",
    stdIEEE: "$300",
    stdNonIEEE: "$350",
  },
  {
    category: "Foreign Student Author",
    earlyIEEE: "$200",
    earlyNonIEEE: "$250",
    stdIEEE: "$250",
    stdNonIEEE: "$300",
  },
  {
    category: "Foreign Author — Additional Papers*",
    earlyIEEE: "$50/paper",
    earlyNonIEEE: "$50/paper",
    stdIEEE: "$75/paper",
    stdNonIEEE: "$75/paper",
  },
];

export default function Registration() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />
      <GradientBlob className="bottom-[-200px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Registration
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Fee{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Structure
            </span>
          </h1>
        </div>

        <GlassCard className="max-w-2xl mx-auto p-10 sm:p-14 text-center">
          <FiClock className="mx-auto text-blue-600" size={32} />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Registrations will start soon
          </h2>
          <p className="mt-3 text-lg text-blue-600">
            Online registration will open shortly. Please check back soon.
          </p>
        </GlassCard>

        <div className="text-center mt-20 mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Registration{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Guidelines
            </span>
          </h2>
        </div>

        <GlassCard className="max-w-4xl mx-auto p-6 sm:p-10">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                At least one of the authors of each accepted paper must register
                for the conference for the paper to be included in the conference
                proceedings and published through IEEE Xplore. Registration fee
                covers conference proceedings, conference kit, coffee breaks,
                working lunch and banquet dinner.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                A full registration covers the registration of one paper. You may
                register an additional paper for a fee of ₹2,000 or $50. Please
                note that while the additional paper will be included in the
                conference proceedings and presentation certificates will be
                issued, it will not be submitted to IEEE Xplore for possible
                publication. Only papers associated with a full author
                registration will be eligible for possible publication in IEEE
                Xplore.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                The maximum length of the paper is 6 pages including references.
                A fee of ₹1,000 or $25 will be applied for each additional page
                (with a maximum of 2 pages).
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                Accepted and presented papers of ICCC 2027 will be submitted for
                possible publication in the IEEE Xplore® Digital Library.
              </p>
            </li>
          </ul>
        </GlassCard>

        <div className="text-center mt-20 mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Fee{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Structure
            </span>
          </h2>
        </div>

        <GlassCard className="overflow-hidden p-0 sm:p-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[700px]">
              <colgroup>
                <col className="w-[36%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
                <col className="w-[16%]" />
              </colgroup>
              <thead>
                <tr className="text-xs uppercase tracking-wider">
                  <th
                    rowSpan={2}
                    className="px-5 py-4 text-left align-middle font-bold text-gray-900 border-b border-gray-200/60 bg-gray-50/80"
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="px-3 py-3 text-center font-bold text-blue-600 border-b border-l border-gray-200/60 bg-blue-50/50"
                  >
                    Early Bird Rates
                  </th>
                  <th
                    colSpan={2}
                    className="px-3 py-3 text-center font-bold text-indigo-600 border-b border-l border-gray-200/60 bg-indigo-50/50"
                  >
                    Standard Rates
                  </th>
                </tr>
                <tr className="text-xs uppercase tracking-wider text-gray-600">
                  <th className="px-3 py-3 text-center font-semibold border-b border-l border-gray-200/60 bg-gray-50/50">
                    IEEE Member
                  </th>
                  <th className="px-3 py-3 text-center font-semibold border-b border-gray-200/60 bg-gray-50/50">
                    Non-IEEE
                  </th>
                  <th className="px-3 py-3 text-center font-semibold border-b border-l border-gray-200/60 bg-gray-50/50">
                    IEEE Member
                  </th>
                  <th className="px-3 py-3 text-center font-semibold border-b border-gray-200/60 bg-gray-50/50">
                    Non-IEEE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50 text-sm">
                {feeRows.map((row) => (
                  <tr
                    key={row.category}
                    className="hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <td className="px-5 py-4 font-medium text-gray-900 break-words">
                      {row.category}
                    </td>
                    <td className="px-3 py-4 text-center border-l border-gray-200/50 text-blue-600 font-semibold">
                      {row.earlyIEEE}
                    </td>
                    <td className="px-3 py-4 text-center text-gray-700">
                      {row.earlyNonIEEE}
                    </td>
                    <td className="px-3 py-4 text-center border-l border-gray-200/50 text-indigo-600 font-semibold">
                      {row.stdIEEE}
                    </td>
                    <td className="px-3 py-4 text-center text-gray-700">
                      {row.stdNonIEEE}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        <p className="text-center mt-6 text-sm text-gray-500">
          * Additional paper charges apply per paper.
        </p>
      </section>
    </div>
  );
}