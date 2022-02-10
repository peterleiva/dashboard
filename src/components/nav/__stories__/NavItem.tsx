import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import NavItem from "../NavItem";
import { BsLink45Deg as Icon } from "react-icons/bs";

type NavItemComponent = typeof NavItem;

export default {
  title: "NavItem",
  component: NavItem,
  argTypes: {
    onSelected: {
      action: "selected",
    },
  },
} as ComponentMeta<NavItemComponent>;

const navItemData = {
  title: "Home",
  to: "/",
  Icon: Icon,
};

const actionData = {
  onActivated: action("onActivated"),
};

const Template: ComponentStory<NavItemComponent> = (args) => (
  <NavItem {...Object.assign(args, navItemData)} {...actionData} />
);

export const Regular = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  activated: true,
};
