import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import '@osrd-project/ui-core/dist/theme.css';
import '@osrd-project/ui-speedspacechart/dist/theme.css';
import { translations as defaultTranslation } from './assets/const';
import { pathPropertiesPmpLm } from './assets/path_properties_PMP_LM';
import { powerRestrictionsPmpLm } from './assets/power_restrictions_PMP_LM';
import { simulationPmpLm } from './assets/simulation_PMP_LM';
import { speedLimitTags } from './assets/speed_limit_tags_PMP_LM';
import { formatData } from './utils';
import SpeedSpaceChart, { type SpeedSpaceChartProps } from '../components/SpeedSpaceChart';

const defaultData = formatData(
  simulationPmpLm,
  pathPropertiesPmpLm,
  powerRestrictionsPmpLm,
  speedLimitTags
);

const SpeedSpaceChartStory = ({
  height,
  width,
  backgroundColor,
  data,
  translations,
}: SpeedSpaceChartProps) => {
  const [containerHeight, setContainerHeight] = useState(521.5);

  useEffect(() => {
    setContainerHeight(height);
  }, [height]);

  return (
    <div style={{ height: containerHeight }}>
      <SpeedSpaceChart
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        data={data}
        setHeight={setContainerHeight}
        translations={translations}
      />
    </div>
  );
};

const meta: Meta<typeof SpeedSpaceChart> = {
  title: 'SpeedSpaceChart/Rendering',
  component: SpeedSpaceChart,
  decorators: [(Story) => <Story />],
  args: {
    width: 1440,
    height: 521.5,
    backgroundColor: 'rgb(247, 246, 238)',
    data: defaultData,
    setHeight: () => {},
    translations: defaultTranslation,
  },

  render: (args) => <SpeedSpaceChartStory {...args} />,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpeedSpaceChart>;

export const SpeedSpaceChartDefault: Story = {
  args: {
    width: 1440,
    height: 521.5,
    backgroundColor: 'rgb(247, 246, 238)',
    data: defaultData,
    setHeight: () => {},
    translations: defaultTranslation,
  },
};
