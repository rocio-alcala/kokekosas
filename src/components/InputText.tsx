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
    <div className={cn("w-full flex-col text-base", className)}>
      <label>
        {label && (
          <legend className=" py-1 text-start font-semibold leading-6 text-[#FFF5D6]">
            {label}
            {required && (
              <span className="text-red-500 dark:text-red-900">*</span>
            )}
          </legend>
        )}
        <input
          className="h-11 w-full rounded-md border-2 p-3 text-gray-900 placeholder:text-gray-500 focus:border-gray-500 focus:outline-none disabled:bg-gray-200"
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
