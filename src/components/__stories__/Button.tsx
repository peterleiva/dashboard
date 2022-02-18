import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsPlus as BtnIcon } from "react-icons/bs";
import Button from "../Button";

type ButtonComponent = typeof Button;

export default {
  title: "Button",
  component: Button,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
} as ComponentMeta<ButtonComponent>;

const Template: ComponentStory<ButtonComponent> = (args) => (
  <Button {...args}>button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "xl",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  Icon: BtnIcon,
};
