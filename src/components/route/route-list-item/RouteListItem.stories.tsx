// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import RouteListItem from './RouteListItem'
import { RouteListItemFragment } from '@/graphql/generated/client'

const fragment: RouteListItemFragment = {
  id: 1,
  mountainId: 1,
  name: 'foo',
  time: 1,
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RouteListItem',
  component: RouteListItem,
} as ComponentMeta<typeof RouteListItem>

const Template: ComponentStory<typeof RouteListItem> = (args) => <RouteListItem {...args} />

export const NonActiveRouteListItem = Template.bind({})

NonActiveRouteListItem.args = {
  data: fragment,
  onClickListItem: () => console.log('onClickListItem'),
  onMouseEnterListItemButton: () => console.log('onMouseEnterListItemButton'),
  onMouseLeaveListItemButton: () => console.log('onMouseLeaveListItemButton'),
  style: {},
  active: false,
}
export const ActiveRouteListItem = Template.bind({})

ActiveRouteListItem.args = {
  ...NonActiveRouteListItem.args,
  active: true,
}
