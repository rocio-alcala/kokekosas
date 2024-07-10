import { cn } from "@/helpers";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface NavBarItemProps {
  onClick?: () => void;
  isActive?: boolean;
  Icon?: IconType;
  isScroll?: boolean;
}

export default function NavBarItem({
  onClick,
  children,
  isActive,
  Icon,
  isScroll,
}: NavBarItemProps & PropsWithChildren) {
  return (
    <li
      onClick={onClick}
      className={cn(
        "navbar-item transition-* group relative flex items-center gap-2 font-mulish text-xl font-bold text-[#FFF5D6] duration-300 hover:cursor-pointer",
        isActive && "text-yellow-400",
      )}
    >
      {Icon && (
        <Icon
          size={35}
          className="transition-* text-[#FFF5D6] duration-300 group-hover:rotate-6 group-hover:scale-110"
        />
      )}
      {children}
      <div
        className={cn(
          "absolute bottom-[-2px] right-0 h-0 items-center overflow-hidden text-clip  text-center font-mulish text-xl font-bold text-[#FFF5D6] duration-300 group-hover:h-full",
          isActive && "text-yellow-400",
          isScroll && "bg-black",
        )}
      >
        {children}
      </div>
    </li>
  );
}
