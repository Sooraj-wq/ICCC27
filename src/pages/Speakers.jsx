import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { keynoteSpeakers, panelists } from "../data/speakers";

export default function Speakers() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />
      <GradientBlob className="bottom-[-200px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Speakers
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Keynote{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Speakers
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Visionaries shaping the future of computing.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {keynoteSpeakers.map((speaker, idx) => (
            <GlassCard key={speaker.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 backdrop-blur-md border border-gray-200 text-xs text-gray-900">
                      Keynote {idx + 1}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                    {speaker.name}
                  </h2>
                  <p className="text-sm text-blue-600 mt-1 font-medium">
                    {speaker.role}
                  </p>
                  <p className="text-blue-600 text-sm leading-relaxed mt-4">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Panelists
          </h2>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Distinguished voices across disciplines.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {panelists.map((p) => (
            <GlassCard key={p.id} className="group p-5 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-500">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-display text-sm font-semibold text-gray-900">
                {p.name}
              </h3>
              <p className="text-xs text-blue-600 mt-1">{p.role}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
