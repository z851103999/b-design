import <%= displayName %> from './src/<%= name %>'

import { install } from '../_utils'

export const B<%= displayName %> = install(<%= displayName %>)

export type <%= displayName %>Instance = InstanceType<typeof <%= displayName %>>

export * from './src/interface'

export default B<%= displayName %>
