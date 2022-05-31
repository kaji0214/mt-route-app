// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import RouteDetail from './RouteDetail'
import { RouteDetailFragment } from '@/graphql/generated/client'

const fragment: RouteDetailFragment = {
  id: 1,
  name: 'foo',
  mountain: {
    id: 1,
    name: 'bar',
  },
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RouteDetail',
  component: RouteDetail,
} as ComponentMeta<typeof RouteDetail>

const Template: ComponentStory<typeof RouteDetail> = (args) => <RouteDetail {...args} />

export const CanAllRouteDetail = Template.bind({})

CanAllRouteDetail.args = {
  data: fragment,
  onClickEditRoute: () => console.log('clicked edit'),
  onClickDeleteRoute: () => console.log('clicked delete'),
  canDelete: true,
  canEdit: true,
}
export const CanNotEditRouteDetail = Template.bind({})

CanNotEditRouteDetail.args = {
  ...CanAllRouteDetail.args,
  canEdit: false,
}
export const CanNotDeleteRouteDetail = Template.bind({})

CanNotDeleteRouteDetail.args = {
  ...CanAllRouteDetail.args,
  canDelete: false,
}
