import { type SchemaTypeDefinition } from 'sanity'
import user from '../user'
import orders from '../orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, orders],
}
