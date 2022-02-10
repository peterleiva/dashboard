import { Factory } from "fishery";
import casual from "casual";
import { BsEmojiDizzy as Icon } from "react-icons/bs";
import { IconType } from "react-icons";

type NavItem = {
  title: string;
  to: string;
  Icon: IconType;
};

export default Factory.define<NavItem>(() => {
  return {
    title: casual.title,
    to: casual.url,
    Icon,
  };
});
