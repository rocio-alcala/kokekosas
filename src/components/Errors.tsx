import { cn } from "@/helpers";

interface ErrorsTypeProps {
  message: undefined | string;
  className?: string;
}

export default function Errors({ message, className }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className={cn("text-xs text-red-400 dark:text-red-500", className)}>
          {message}
        </p>
      ) : null}
    </>
  );
}
