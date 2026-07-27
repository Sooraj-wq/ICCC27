import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { chairs, tpcMembers } from "../data/committee";

export default function Committee() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Committee
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Conference{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Leadership
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Meet the distinguished chairs and organizers steering ICCC 2027.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chairs.map((chair) => (
            <GlassCard key={chair.id} className="group p-5 text-center">
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-500">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-base font-semibold text-gray-900">
                {chair.name}
              </h3>
              <p className="text-xs text-blue-500 mt-1">{chair.affiliation}</p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-600 text-xs font-medium">
                {chair.role}
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Technical Program Committee
          </h2>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Our esteemed reviewers and TPC members.
          </p>
        </div>
        <GlassCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200/50">
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-blue-500 font-medium">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-blue-500 font-medium">
                    Affiliation
                  </th>
                </tr>
              </thead>
              <tbody>
                {tpcMembers.map((member, i) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-200/50 last:border-0 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600">
                      {member.affiliation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
