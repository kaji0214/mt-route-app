import { AuthChecker } from 'type-graphql'
import { Context } from '@/graphql/context'
export const customAuthChecker: AuthChecker<Context> = async (
  { root, args, context, info },
  roles,
) => {
  return !!context.session
}
