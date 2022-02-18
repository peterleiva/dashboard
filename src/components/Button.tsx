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
   * use one of button predefined size
   */
  size?: ButtonSize;
  /**
   * choose one of predefined button colors
   */
  theme: ButtonColor;
};

export default function Button({
  children,
  backgroundColor,
  labelColor,
  theme = "black",
  size = "md",
}: ButtonProps) {
  return (
    <button
      className={clsx("rounded-lg", applyColor(theme), applySize(size))}
      style={{ backgroundColor, color: labelColor }}
    >
      {children}
    </button>
  );
}

const btnColor = {
  black: {
    primary: "bg-slate-800",
    foreground: "text-white",
  },
  green: {
    primary: "bg-green-400",
    foreground: "text-white",
  },
  white: {
    primary: "bg-white",
    foreground: "text-slate-800",
  },
  blue: {
    primary: "bg-sky-500",
    foreground: "text-white",
  },
  red: {
    primary: "bg-red-500",
    foreground: "text-white",
  },
};

const sizes = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-lg",
  xl: "px-8 py-5 text-xl",
  "2xl": "px-9 py-6 text-2xl",
};

type ButtonColor = keyof typeof btnColor;
type ButtonSize = keyof typeof sizes;

const applyColor = (color: ButtonColor) =>
  Object.values(btnColor[color]).join(" ");

const applySize = (size: ButtonSize) => sizes[size];
