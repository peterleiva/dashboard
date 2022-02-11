import { ComponentStory, type ComponentMeta } from "@storybook/react";
import MainNav from "../MainNav";

type MainNavComponent = typeof MainNav;

export default {
  title: "MainNav",
  component: MainNav,
} as ComponentMeta<MainNavComponent>;

const Template: ComponentStory<MainNavComponent> = (args) => (
  <MainNav {...args} />
);

export const Expanded = Template.bind({});

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
