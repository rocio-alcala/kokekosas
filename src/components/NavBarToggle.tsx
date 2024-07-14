import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";

interface NavBarToggleProps {
  isOpen: boolean;
  CloseIcon: IconType;
  OpenIcon: IconType;
  onClickClose?: () => void;
  onClickOpen?: () => void;
  iconClassName: string;
  iconSize: number;
}

export default function NavBarToggle({
  isOpen,
  CloseIcon,
  OpenIcon,
  onClickClose,
  onClickOpen,
  iconClassName,
  iconSize,
}: NavBarToggleProps) {
  const variants = {
    hidden: { opacity: 0, rotate: 90 },
    visible: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -90 },
  };

  return (
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center">
      {isOpen ? (
        <AnimatePresence>
          <motion.div
            key="close"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.2,
            }}
            className="absolute"
          >
            <CloseIcon
              className={iconClassName}
              size={iconSize}
              onClick={onClickClose}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            key="menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.2,
            }}
            className="absolute"
          >
            <OpenIcon
              className={iconClassName}
              size={iconSize}
              onClick={onClickOpen}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
