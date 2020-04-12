import { getGraphqlFields } from './graphqlFields';
import { plugin } from '@nexus/schema';

export const prismaSelectObject = plugin({
  name: 'prismaSelectObject',
  onCreateFieldResolver() {
    return async (root, args, ctx, info, next) => {
      ctx.select = getGraphqlFields(info);
      return await next(root, args, ctx, info);
    };
  },
});