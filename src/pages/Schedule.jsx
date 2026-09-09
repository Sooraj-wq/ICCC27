import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";

export default function Schedule() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Schedule
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mt-4">
            Conference{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Program
            </span>
          </h1>
        </div>

        <GlassCard className="max-w-2xl mx-auto p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            To Be Announced
          </h2>
          <p className="mt-3 text-lg text-blue-600">
            The conference program will be announced soon.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}