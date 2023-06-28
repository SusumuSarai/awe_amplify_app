// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RecipeItem, Recipe } = initSchema(schema);

export {
  RecipeItem,
  Recipe
};