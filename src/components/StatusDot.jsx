export default function StatusDot({ active = true }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${
        active ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-gray-300"
      }`}
    />
  );
}
