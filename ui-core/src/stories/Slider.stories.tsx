import React, { useState } from 'react';

import { type Meta, type StoryObj } from '@storybook/react';

import Slider, { type SliderProps } from '../components/inputs/Slider';

import './stories.css';

const Wrapper = (props: SliderProps) => {
  const [value, setValue] = useState(0);
  const [committedValue, setCommittedValue] = useState(0);

  return (
    <div className="wrapper-container">
      <div className="values-container">
        <div className="value-box">Value: {value}</div>
        <div className="value-box">Committed Value: {committedValue}</div>
      </div>
      <div className="slider-container">
        <Slider
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          onChangeCommitted={(e) => {
            setCommittedValue(Number(e.currentTarget.value));
          }}
          {...props}
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  args: {
    disabled: false,
    width: 112,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Core/Slider',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Value: Story = {
  args: {
    disabled: false,
    width: 112,
  },
};
