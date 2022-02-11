import { useEffect } from "react";
import type { IconType } from "react-icons";
import useToggle from "../../hooks/useToggle";
import clsx from "clsx";
import { MouseEventHandler } from "react";

type NavItemProps = {
  /**
   * navigation item icon
   */
  Icon: IconType;
  /**
   * label specifying the navigation item
   */
  title: string;
  /**
   * href link to where it should go
   */
  to: string;
  /**
   * mark wheter the nav item is activated
   */
  activated?: boolean;
  /**
   * event handled when status is activated
   */
  onActivated?: () => void;
};

export default function NavItem({
  title,
  to,
  Icon,
  activated = false,
  onActivated,
}: NavItemProps) {
  const { toggle, isOn } = useToggle(activated);

  useEffect(() => {
    if (isOn) onActivated?.();
  }, [isOn, onActivated]);

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();

    toggle();
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={clsx("flex gap-3 items-center px-7 py-4", {
        "text-blue-600 font-bold active": isOn,
      })}
    >
      <Icon size="24" /> {title}
      <style>{`
        .active {
          background: no-repeat url("/active-nav-item.svg");
          background-size: contain;
        }
      `}</style>
    </a>
  );
}
