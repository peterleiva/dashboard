import clsx from "clsx";
import { motion, type Variants } from "framer-motion";
import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import NavItem from "./NavItem";

type MainProps = {
  collapsed?: boolean;
  className?: string;
};

const variants: Variants = {
  collapsed: { x: "-100%" },
  expanded: { x: "0%" },
};

const getVariant = (collapsed: boolean) =>
  collapsed ? "collapsed" : "expanded";

export default function MainNav({ collapsed = false, className }: MainProps) {
  return (
    <motion.nav
      variants={variants}
      initial={getVariant(collapsed)}
      className={clsx(className, "flex flex-col")}
    >
      <NavItem title="Home" Icon={HomeIcon} to="/" activated />
    </motion.nav>
  );
}
