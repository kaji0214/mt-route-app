// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import MountainDetail from './MountainDetail'
import { MountainDetailFragment } from '@/graphql/generated/client'

const fragment: MountainDetailFragment = {
  name: 'foo',
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MountainDetail',
  component: MountainDetail,
} as ComponentMeta<typeof MountainDetail>

const Template: ComponentStory<typeof MountainDetail> = (args) => <MountainDetail {...args} />

export const CanAllMountainDetail = Template.bind({})

CanAllMountainDetail.args = {
  data: fragment,
  onClickAddRoute: () => console.log('clicked add'),
  onClickEditMountain: () => console.log('clicked edit'),
  onClickDeleteMountain: () => console.log('clicked delete'),
  canDelete: true,
  canEdit: true,
}
export const CanNotEditMountainDetail = Template.bind({})

CanNotEditMountainDetail.args = {
  ...CanAllMountainDetail.args,
  canEdit: false,
}
export const CanNotDeleteMountainDetail = Template.bind({})

CanNotDeleteMountainDetail.args = {
  ...CanAllMountainDetail.args,
  canDelete: false,
}
