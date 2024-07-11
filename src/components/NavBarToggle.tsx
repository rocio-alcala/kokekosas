import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function NavBarToggle({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const variants = {
    hidden: { opacity: 0, rotate: 90 },
    visible: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -90 },
  };

  return (
    <>
      {isMenuOpen ? (
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
            <IoMdClose
              className="fill-slate-100"
              size={25}
              onClick={() => setIsMenuOpen(false)}
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
            <IoMdMenu
              className="fill-slate-100"
              size={25}
              onClick={() => setIsMenuOpen(true)}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
