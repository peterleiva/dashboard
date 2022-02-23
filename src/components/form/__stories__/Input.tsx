import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { BsAward } from "react-icons/bs";
import Input from "../Input";

type InputComponent = typeof Input;

export default {
  title: "form/Input",
  component: Input,
} as ComponentMeta<InputComponent>;

const Template: ComponentStory<InputComponent> = ({ icon, ...args }) => (
  <Input icon={icon ?? <BsAward />} {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "text",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "password",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "email",
};

export const Date = Template.bind({});
Date.args = {
  type: "date",
  placeholder: "date",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  placeholder: "search",
};

export const Color = Template.bind({});
Color.args = {
  type: "color",
  placeholder: "color",
};
