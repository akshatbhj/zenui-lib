import type { Meta, StoryObj } from "@storybook/react";
import { ZenNavbar } from "./ZenNavbar";

const meta: Meta<typeof ZenNavbar> = {
  component: ZenNavbar,
};

export default meta;
type Story = StoryObj<typeof ZenNavbar>;

export const FirstStory: Story = {
  args: {
    logoText: "Logo",
    linkOne: "Link 1",
    linkTwo: "Link 2",
    linkThree: "Link 3",
    linkFour: "Link 4",
  },
};