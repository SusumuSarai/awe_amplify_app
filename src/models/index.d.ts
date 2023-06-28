import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerRecipeItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeItem: string;
  readonly quantity: number;
  readonly recipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipeItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeItem: string;
  readonly quantity: number;
  readonly recipeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecipeItem = LazyLoading extends LazyLoadingDisabled ? EagerRecipeItem : LazyRecipeItem

export declare const RecipeItem: (new (init: ModelInit<RecipeItem>) => RecipeItem) & {
  copyOf(source: RecipeItem, mutator: (draft: MutableModel<RecipeItem>) => MutableModel<RecipeItem> | void): RecipeItem;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipe: string;
  readonly memo?: string | null;
  readonly url?: string | null;
  readonly RecipeItems?: (RecipeItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipe: string;
  readonly memo?: string | null;
  readonly url?: string | null;
  readonly RecipeItems: AsyncCollection<RecipeItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}