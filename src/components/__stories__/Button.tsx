import { ComponentMeta, ComponentStory } from "@storybook/react";
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

export const Default = Template.bind({});
