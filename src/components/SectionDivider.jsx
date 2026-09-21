export default function SectionDivider({ className = "" }) {
  return (
    <div
      className={`w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12 ${className}`}
    />
  );
}
