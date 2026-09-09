import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import { FiMapPin, FiNavigation, FiSend } from "react-icons/fi";

export default function Venue() {
  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Venue
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-gray-900 mt-4">
            College of Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Trivandrum
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            Kerala's first engineering college — since 1939.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                Location &amp; Travel
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      College of Engineering Trivandrum
                    </p>
                    <p className="text-sm text-blue-600">
                      Kulathoor, Thiruvananthapuram, Kerala 695583, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiSend className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      Thiruvananthapuram International Airport (TRV)
                    </p>
                    <p className="text-sm text-blue-600">
                      15 km &bull; ~30 min by taxi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiNavigation className="text-blue-600 mt-0.5 shrink-0" size={18} />
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      Thiruvananthapuram Central Railway Station
                    </p>
                    <p className="text-sm text-blue-600">
                      12 km &bull; ~25 min by taxi
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8 flex-1">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-3">
                Conference Facilities
              </h2>
              <p className="text-blue-600 text-base leading-relaxed">
                The college campus has well-equipped venues at CETAA Hall, C-CUBE Hall, Research Seminar Hall (EE), Research Seminar Hall (ECE), and SDP Hall (CSE) for staging presentations. Ample open/closed-door space for gatherings, amenity centres, and restroom facilities are available on campus.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-0 overflow-hidden flex flex-col h-full min-h-[400px]">
            <div className="w-full flex-1 min-h-[350px]">
              <iframe
                title="College of Engineering Trivandrum Map"
                src="https://www.openstreetmap.org/export/embed?bbox=76.89636826515199%2C8.539750993637655%2C76.91053032875062%2C8.54870563254786&layer=mapnik"
                className="w-full h-full border-0"
              />
            </div>
            <div className="p-3 text-center border-t border-gray-100 bg-gray-50/50">
              <small>
                <a
                  href="https://www.openstreetmap.org/#map=17/8.544228/76.903449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  View Larger Map
                </a>
              </small>
            </div>
          </GlassCard>
        </div>
      </section>      
    </div>
  );
}