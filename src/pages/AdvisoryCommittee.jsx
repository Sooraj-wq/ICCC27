import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import { advisory } from "../data/committee";

export default function AdvisoryCommittee() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Committees
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Advisory{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Committee
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-2xl mx-auto">
            Distinguished advisors from institutions across the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisory.map((region) => (
            <GlassCard key={region.region} className="p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-5">
                {region.region}
              </h3>
              <ul className="space-y-4">
                {region.members.map((member) => (
                  <li key={member.name}>
                    <p className="text-base text-gray-900 font-medium">{member.name}</p>
                    <p className="text-sm text-blue-600">{member.affiliation}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}