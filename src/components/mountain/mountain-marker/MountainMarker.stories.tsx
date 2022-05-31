// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import MountainMarker from './MountainMarker'
import { MountainMarkerFragment } from '@/graphql/generated/client'

const fragment: MountainMarkerFragment = {
  id: 1,
  lat: 2,
  lng: 3,
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MountainMarker',
  component: MountainMarker,
} as ComponentMeta<typeof MountainMarker>

const Template: ComponentStory<typeof MountainMarker> = (args) => <MountainMarker {...args} />

export const NonActive = Template.bind({})

NonActive.args = {
  data: fragment,
  active: false,
}
export const Active = Template.bind({})

Active.args = {
  data: fragment,
  active: true,
}
