import { cn } from "../helpers";

interface ButtonSpecificPropsType {
  isLoading?: boolean;
  className?: string;
}

export default function Button({
  children,
  isLoading,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  return (
    <button
      className={cn(
        "w-full border-2 p-3 text-center text-sm font-semibold leading-4 tracking-widest transition-all duration-500 rounded-md",
        className,
      )}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? <p>LOADING...</p> : children}
    </button>
  );
}
