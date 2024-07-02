import { cn } from "@/helpers";

interface ErrorsTypeProps {
  message: undefined | string;
  className?: string;
}

export default function Errors({ message, className }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className={cn("text-start text-xs text-yellow-400", className)}>
          {message}
        </p>
      ) : null}
    </>
  );
}
