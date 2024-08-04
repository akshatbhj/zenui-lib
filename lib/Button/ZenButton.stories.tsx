import type { Meta, StoryObj } from "@storybook/react";
import { ZenButton } from "./ZenButton";

const meta: Meta<typeof ZenButton> = {
  component: ZenButton,
};

export default meta;
type Story = StoryObj<typeof ZenButton>;

export const FirstStory: Story = {
  args: {
    children: "Click Me",
  },
};