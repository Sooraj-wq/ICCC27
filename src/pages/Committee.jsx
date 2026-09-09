import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { leadership, committees, advisory } from "../data/committee";

export default function Committee() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Committees
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Conference{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Committees
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-2xl mx-auto">
            Meet the patrons, organizers, and committee members steering ICCC 2027.
          </p>
        </div>

        {leadership.map((group) => (
          <div key={group.group} className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
              {group.group}
            </h2>
            <div
              className={`grid gap-6 ${group.items.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
            >
              {group.items.map((item) => (
                <GlassCard key={item.name} className="p-6 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-600 text-sm font-medium">
                    {item.role}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mt-3">
                    {item.name}
                  </h3>
                  <p className="text-sm text-blue-500 mt-1">{item.affiliation}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Organizing <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">Committees</span>
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            The working committees managing every facet of the conference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committees.map((committee) => (
            <div key={committee.title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-5">
                {committee.title}
              </h3>
              {committee.sections.map((section) => (
                <div key={section.heading} className="mb-5 last:mb-0">
                  <p className="text-xs uppercase tracking-widest text-blue-500 font-medium mb-2">
                    {section.heading}
                  </p>
                  <div className="space-y-3">
                    {section.people.map((person) => (
                      <div key={person.name}>
                        <p className="text-base text-gray-900 font-medium">{person.name}</p>
                        <p className="text-sm text-blue-600">{person.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900">
            Advisory <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">Committee</span>
          </h2>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
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