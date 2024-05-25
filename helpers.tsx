import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function isRunningOnClient() {
  return typeof window !== "undefined";
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
