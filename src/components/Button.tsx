import clsx from "clsx";
import { IconType } from "react-icons";

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
  /**
   * add icon to button
   */
  Icon?: IconType;
};

export default function Button({
  children,
  backgroundColor,
  labelColor,
  Icon,
  theme = "black",
  size = "md",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg font-semibold transition-colors duration-250",
        applyColor(theme),
        applySize(size),
        {
          [`flex flex-row-reverse gap-4 items-center ${btnColor[theme].foreground}`]:
            Icon,
        }
      )}
      style={{ backgroundColor, color: labelColor }}
    >
      {Icon && <Icon transform={`scale(1.5)`} />} {children}
    </button>
  );
}

const btnColor = {
  black: {
    primary: "hover:bg-slate-900 bg-slate-800",
    foreground: "text-white",
  },
  green: {
    primary: "hover:bg-green-600 bg-green-400",
    foreground: "text-white",
  },
  white: {
    primary: "hover:bg-slate-300 bg-white",
    foreground: "text-slate-800",
  },
  blue: {
    primary: "hover:bg-sky-600 bg-sky-500",
    foreground: "text-white",
  },
  red: {
    primary: "hover:bg-rose-700 bg-rose-600",
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
