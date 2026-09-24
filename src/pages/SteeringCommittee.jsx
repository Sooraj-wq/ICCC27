import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import { steering } from "../data/committee";

export default function SteeringCommittee() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Committees
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Steering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Committee
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-2xl mx-auto">
            Our esteemed Steering Committee comprises distinguished faculty members who provide strategic guidance and oversight for the conference.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-6 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Committee Members
            </h2>
            <ul className="space-y-4">
              {steering.map((member) => (
                <li key={member.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <p className="text-base sm:text-lg text-gray-900 font-medium">{member.name}</p>
                  <p className="text-sm text-blue-600">{member.designation}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}