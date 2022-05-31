import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'
import { Context } from '@/graphql/context'

export const CreateAuthMiddleware: MiddlewareFn<Context> = async ({ args, context }, next) => {
  if (context!.session!.user.id !== args.data.userId) {
    throw new Error('create action is not authorized.')
  }
  return next()
}
