export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-white/70 border border-gray-200 backdrop-blur-xl rounded-2xl ${
        hover ? "transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg hover:shadow-black/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
