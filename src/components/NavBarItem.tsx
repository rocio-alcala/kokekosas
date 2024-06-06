import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface NavBarItemProps {
  onClick?: () => void;
  active?: boolean;
  Icon?: IconType;
}

export default function NavBarItem({
  onClick,
  children,
  active,
  Icon,
}: NavBarItemProps & PropsWithChildren) {
  return (
    <li
      onClick={onClick}
      className={`navbar-item transition-* group m-2 flex items-center gap-2 font-mulish text-xl font-bold duration-300 hover:cursor-pointer hover:text-yellow-400 ${active && "text-yellow-400"}`}
    >
      {Icon && (
        <Icon
          size={35}
          className="transition-* text-white duration-300 group-hover:rotate-6 group-hover:scale-110"
        />
      )}
      {children}
    </li>
  );
}
