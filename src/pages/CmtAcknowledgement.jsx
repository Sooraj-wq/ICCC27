import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";

export default function CmtAcknowledgement() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Acknowledgement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            CMT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Acknowledgement
            </span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-6 sm:p-10 text-center">
            <p className="text-blue-600 leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
