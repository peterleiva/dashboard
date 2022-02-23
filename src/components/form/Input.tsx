import clsx from "clsx";

type InputProps = JSX.IntrinsicElements["input"] & {
  icon: React.ReactNode;
};

export default function Input({ className, icon, ...htmlProps }: InputProps) {
  return (
    <div className={clsx("flex items-center -ml-4", className)}>
      <span className="relative grow-0 left-6 top-1 text-indigo-500">
        {icon}
      </span>
      <input
        className={clsx(
          "px-4 py-2 pl-8 border-2 duration-150 transition-colors border-slate-300 rounded-lg outline-none focus:border-2 focus:border-indigo-500"
        )}
        {...htmlProps}
      />
    </div>
  );
}
