import clsx from "clsx";

type ButtonType = JSX.IntrinsicElements["button"];

type ButtonProps = ButtonType & {
  /**
   * custom background color overrides the theme color
   */
  backgroundColor?: string;
  /**
   * custom label color overrides theme color
   */
  labelColor?: string;
  /**
   * define button size
   */
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Button({
  children,
  backgroundColor,
  labelColor,
  size = "md",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg",
        "bg-slate-800 text-white",
        `scale-${sizes[size]}`
      )}
      style={{ backgroundColor, color: labelColor }}
    >
      {children}
    </button>
  );
}

const colors = {
  black: "slate-800",
  green: "green-400",
  white: "white",
  blue: "sky-500",
  red: "red-500",
};

const sizes = {
  sm: "-4",
  md: "0",
  lg: "4",
  xl: "6",
};
