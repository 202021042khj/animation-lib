import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AnimatedText } from "./AnimatedText";

const meta: Meta<typeof AnimatedText> = {
  title: "AnimatedText",
  component: AnimatedText,
  argTypes: {
    preset: {
      control: "select",
      options: ["fade", "slide"],
    },
    split: {
      control: "select",
      options: ["character", "word", "line"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Default: Story = {
  args: {
    text: "Hello Storybook!",
    preset: "fade",
    split: "line",
  },
};

export const SlideWord: Story = {
  args: {
    text: "Slide Animation Test",
    preset: "slide",
    split: "character",
  },
};

export const FullPage: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f7f7f7",
        flexDirection: "column",
        gap: "",
      }}
    >
      <AnimatedText
        text="My Library"
        preset="fade"
        split="line"
        unitStagger={0.03}
        startDelay={0}
      />

      <AnimatedText
        text="Welcome to My Library"
        preset="fade"
        split="line"
        unitStagger={0.03}
        startDelay={0.2}
      />
      <AnimatedText
        text="Beautiful Transitions"
        preset="slide"
        split="character"
        unitStagger={0.03}
        lineStagger={0.5}
        startDelay={0.2}
      />
      <AnimatedText
        text="Start using it now!"
        preset="fade"
        split="character"
        unitStagger={0.03}
        startDelay={0.4}
      />
    </div>
  ),
};
