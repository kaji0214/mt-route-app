import { newMountain, ShowMountainDocument } from '@/graphql/generated/client'
import { graphql } from 'msw'

export const handlers = [
  graphql.query(ShowMountainDocument, (req, res, ctx) =>
    res(
      ctx.data({
        todos: [newMountain(), newMountain()],
      }),
    ),
  ),
]
