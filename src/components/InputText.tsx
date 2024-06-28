import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";
import { cn } from "@/helpers";

interface InputTextSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
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
        <input
          className="placeholder:text-placeholder dark:focus:border-primary-text-dark focus:border-primary-text-light text-primary-text-light disabled:bg-grey2 h-11 w-full rounded-md border-2 p-3 focus:outline-none"
          ref={ref}
          type="text"
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

export default InputText;
