export default function GradientBlob({ className = "" }) {
  const colors = [
    "from-blue-500/30 via-indigo-500/20 to-transparent",
    "from-purple-600/30 via-pink-500/20 to-transparent",
    "from-indigo-500/30 via-blue-600/20 to-transparent",
    "from-pink-500/30 via-purple-600/20 to-transparent",
  ];
  const colorClass = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br ${colorClass} blur-3xl opacity-15 ${className}`}
      aria-hidden="true"
    />
  );
}
