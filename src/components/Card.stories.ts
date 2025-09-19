import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "This is the card content. It can contain any React elements.",
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    variant: "outlined",
    children: "This card has an outlined style with a border.",
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    variant: "elevated",
    children: "This card has an elevated style with a shadow.",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    children: "This card can be clicked!",
    onClick: () => alert("Card clicked!"),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "This card doesn't have a title, just content.",
  },
};
