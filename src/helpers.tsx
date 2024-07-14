import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function isRunningOnClient() {
  return typeof window !== "undefined";
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function getScrollbarWidth() {
  // Crear un elemento div temporal
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // Forzar barra de scroll
  document.body.appendChild(outer);

  // Crear un hijo dentro del div temporal
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calcular la diferencia entre el ancho del div externo e interno
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Eliminar los divs temporales
  if (outer.parentNode) outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}
