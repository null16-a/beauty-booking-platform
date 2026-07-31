import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "rounded-full px-8 py-4 text-lg font-medium transition duration-300";

  const variants = {
    primary:
      "bg-black text-white hover:bg-neutral-800 hover:scale-105",

    secondary:
      "border-2 border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}