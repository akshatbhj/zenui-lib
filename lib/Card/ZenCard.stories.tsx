import type { Meta, StoryObj } from "@storybook/react";
import { ZenCard } from "./ZenCard";

const meta: Meta<typeof ZenCard> = {
  component: ZenCard,
};

export default meta;
type Story = StoryObj<typeof ZenCard>;

export const FirstStory: Story = {
  args: {
    title: "Card Title",
    description: "Card Description",
    btnText: "Button Text",
  },
};
