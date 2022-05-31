// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RoutePolylineFragment } from '@/graphql/generated/client'
import RoutePolyline from './RoutePolyline'

const fragment: RoutePolylineFragment = {
  id: 1,
  latlngs: [
    {
      id: 2,
      lat: 2,
      lng: 2,
    },
    {
      id: 3,
      lat: 3,
      lng: 3,
    },
  ],
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RoutePolyline',
  component: RoutePolyline,
} as ComponentMeta<typeof RoutePolyline>

const Template: ComponentStory<typeof RoutePolyline> = (args) => <RoutePolyline {...args} />

export const NonActive = Template.bind({})

NonActive.args = {
  data: fragment,
  active: false,
}
export const Active = Template.bind({})

Active.args = {
  ...NonActive,
  active: true,
}
