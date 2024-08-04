import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./ZenButton";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: "Click Me",
  },
};