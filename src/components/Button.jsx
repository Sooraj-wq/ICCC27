export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ease-in-out cursor-pointer";

  const styles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]",
    secondary:
      "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300",
    ghost: "text-gray-400 hover:text-gray-700",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
