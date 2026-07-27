import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { FiMapPin, FiNavigation, FiSend } from "react-icons/fi";

const hotels = [
  { name: "Hotel Mascot", rating: "4-Star", distance: "2.5 km from CET", code: "ICCC2027", discount: "10% off" },
  { name: "The South Park", rating: "5-Star", distance: "4.0 km from CET", code: "ICCC2027", discount: "12% off" },
  { name: "Hotel Pankaj", rating: "3-Star", distance: "1.5 km from CET", code: "ICCC2027", discount: "10% off" },
];

export default function Venue() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Venue
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            College of Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Trivandrum
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Kerala's first engineering college — since 1939.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-4">
                Location &amp; Travel
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      College of Engineering Trivandrum
                    </p>
                    <p className="text-xs text-blue-600">
                      Kulathoor, Thiruvananthapuram, Kerala 695583, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiSend className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Thiruvananthapuram International Airport (TRV)
                    </p>
                    <p className="text-xs text-blue-600">
                      15 km &bull; ~30 min by taxi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiNavigation className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Thiruvananthapuram Central Railway Station
                    </p>
                    <p className="text-xs text-blue-600">
                      12 km &bull; ~25 min by taxi
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Conference Facilities
              </h2>
              <p className="text-blue-600 text-sm leading-relaxed">
                The college campus has well-equipped venues at CETAA Hall, C-CUBE Hall, Research Seminar Hall (EE), Research Seminar Hall (ECE), and SDP Hall (CSE) for staging presentations. Ample open/closed-door space for gatherings, amenity centres, and restroom facilities are available on campus.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-0 overflow-hidden min-h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-200 flex items-center justify-center">
                  <FiMapPin className="text-blue-600" size={28} />
                </div>
                <p className="text-blue-600 text-sm max-w-xs">
                  College of Engineering Trivandrum — Kulathoor Campus
                </p>
                <div className="mt-6 w-full max-w-xs mx-auto h-32 rounded-xl bg-white/70 border border-gray-200/50 relative overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-blue-200 animate-ping"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                  <div className="absolute bottom-2 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-400/50" />
                  <div className="absolute top-2 left-2 text-[10px] text-blue-500 font-mono">
                    8.5340°N 76.9100°E
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Accommodations
          </h2>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Partner hotels with special conference rates.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <GlassCard key={hotel.name} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-base font-semibold text-gray-900">
                    {hotel.name}
                  </h3>
                  <span className="text-xs text-blue-500">{hotel.rating}</span>
                </div>
                <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                  {hotel.discount}
                </span>
              </div>
              <p className="text-xs text-blue-600 mb-4">{hotel.distance}</p>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 border border-gray-200/50">
                <span className="text-xs text-blue-500">Code:</span>
                <span className="text-xs font-mono font-semibold text-blue-600">
                  {hotel.code}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
