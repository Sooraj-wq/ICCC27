import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import SectionDivider from "../components/SectionDivider";
import { pricingPlans } from "../data/registration";
import { FiCheck } from "react-icons/fi";

export default function Registration() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] left-[-200px]" />
      <GradientBlob className="bottom-[-200px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Registration
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Choose Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Pass
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Select the registration type that fits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <GlassCard
              key={plan.id}
              className={`relative p-6 sm:p-8 flex flex-col ${
                plan.popular ? "border-blue-400 ring-1 ring-blue-200" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold tracking-wide">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-blue-600 text-sm mt-1">{plan.description}</p>
                <p className="mt-4">
                  <span className="font-display text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-blue-500 text-sm ml-1">/ person</span>
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-blue-500">
                    <FiCheck className="text-blue-600 mt-0.5 shrink-0" size={16} />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Secure Your Spot
          </h2>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Fill in your details to complete registration.
          </p>
        </div>
        <GlassCard className="max-w-2xl mx-auto p-6 sm:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs text-blue-600 mb-1.5 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-blue-600 mb-1.5 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs text-blue-600 mb-1.5 font-medium">
                Institution / Organization
              </label>
              <input
                type="text"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                placeholder="University of Tokyo"
              />
            </div>
            <div>
              <label className="block text-xs text-blue-600 mb-1.5 font-medium">
                Registration Type
              </label>
              <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 appearance-none">
                <option value="" className="bg-deep">Select a pass type</option>
                {pricingPlans.map((p) => (
                  <option key={p.id} value={p.name} className="bg-deep">
                    {p.name} — {p.price}
                  </option>
                ))}
              </select>
            </div>
            <Button variant="primary" className="w-full justify-center py-3.5">
              Complete Registration
            </Button>
            <p className="text-xs text-blue-500 text-center">
              🔒 Your information is encrypted and secure. We never share your
              data.
            </p>
          </form>
        </GlassCard>
      </section>
    </div>
  );
}
