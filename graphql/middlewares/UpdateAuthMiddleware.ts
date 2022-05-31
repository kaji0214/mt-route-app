import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'
import { Context } from '@/graphql/context'

export const UpdateAuthMiddleware: MiddlewareFn<Context> = async ({ args, context }, next) => {
  if (context!.session!.user.id !== args.data.set.userId) {
    throw new Error('create action is not authorized.')
  }
  return next()
}
