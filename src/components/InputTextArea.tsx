import { cn } from "@/helpers";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputTextAreaSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
  required?: boolean;
}

const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea"> & InputTextAreaSpecificProps
>(({ label, errors, required, description, className, ...props }, ref) => {
  return (
    <div className={cn("flex-col", className)}>
      <label>
        {label && (
          <legend className="text-grey8-dark-text py-1 font-semibold leading-6">
            {label}
            {required && (
              <span className="text-red-500 dark:text-red-900">*</span>
            )}
          </legend>
        )}
        <textarea
          className="placeholder:text-placeholder disabled:bg-grey2 text-primary-text-light focus:border-primary-text-light dark:focus:border-primary-text-dark h-11 min-h-72 w-full rounded-md border-2 p-3 focus:outline-none"
          ref={ref}
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  leading-6 tracking-wide text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputTextArea;
