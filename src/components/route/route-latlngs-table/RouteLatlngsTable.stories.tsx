// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import RouteLatlngsTable from '@/src/components/route/route-latlngs-table/RouteLatlngsTable'
import { RouteLatlngsTableFragment } from '@/graphql/generated/client'

const fragment: RouteLatlngsTableFragment = {
  latlngs: [
    {
      id: 1,
      lat: 2,
      lng: 3,
    },
    {
      id: 4,
      lat: 5,
      lng: 6,
    },
  ],
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RouteLatlngsTable',
  component: RouteLatlngsTable,
} as ComponentMeta<typeof RouteLatlngsTable>

const Template: ComponentStory<typeof RouteLatlngsTable> = (args) => <RouteLatlngsTable {...args} />

export const NormalLatlngsTable = Template.bind({})

NormalLatlngsTable.args = {
  data: fragment,
}
