import { useState } from "react";

export default function useToggle(initial = false) {
  const [on, setOn] = useState<boolean>(initial);

  const toggle = () => setOn((on) => !on);
  const off = () => setOn(false);

  return {
    on: () => setOn(true),
    off,
    isOn: on,
    isOff: !on,
    toggle,
  };
}
