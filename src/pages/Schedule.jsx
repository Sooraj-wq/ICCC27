import { useState } from "react";
import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";
import SectionDivider from "../components/SectionDivider";
import { scheduleData } from "../data/schedule";

const days = Object.keys(scheduleData);

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-medium">
            Schedule
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mt-4">
            Conference{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Program
            </span>
          </h1>
          <p className="mt-3 text-blue-600 max-w-lg mx-auto">
            Two days of groundbreaking talks, panels, and networking.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 border border-gray-200 rounded-full p-1">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDay === day
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent" />

          <div className="space-y-6">
            {scheduleData[activeDay].map((session, idx) => (
              <div key={idx} className="relative pl-12">
                <div
                  className={`absolute left-[13px] top-6 w-3 h-3 rounded-full border-2 ${
                    session.speaker
                      ? "bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                      : "bg-blue-700 border-blue-600"
                  }`}
                />
                <GlassCard className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-blue-600 font-medium">
                      {session.time}
                    </span>
                    {session.room && (
                      <span className="text-xs text-blue-500">
                        {session.room}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-base font-semibold text-gray-900">
                    {session.title}
                  </h3>
                  {session.speaker && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border border-gray-200 flex items-center justify-center text-[10px] text-blue-500 font-medium">
                        {session.speaker
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>
                      <p className="text-xs text-blue-600">{session.speaker}</p>
                    </div>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
