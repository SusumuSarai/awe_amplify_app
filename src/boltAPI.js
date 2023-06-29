import { DataStore } from "@aws-amplify/datastore";
import {
  Shop,
  ShoppingList,
  Recipe,
  RecipeItem,
  Menu,
  RecipeMenu,
} from "./models";

// Shop お店登録
export const createShopAPI = async (data) => {
  // API動作確認用ダミーデータ
  data = {
    shop: "バロー安城店３",
    corner: ["肉", "魚", "卵"],
  };
  // ダミーここまで

  const { shop, corner } = data;

  try {
    await DataStore.save(
      new Shop({
        shop,
        corner,
      })
    );
  } catch (error) {
    throw error;
  }
};

// ShoppingList 買い物登録
export const createShoppingListAPI = async (data) => {
  // API動作確認用ダミーデータ
  data = {
    item: "豚肉",
    unit: "g",
    quantity: 800,
    corner: "肉",
  };
  // ダミーここまで

  const { item, unit, quantity, corner } = data;
  try {
    await DataStore.save(
      new ShoppingList({
        item,
        unit,
        quantity,
        corner,
      })
    );
  } catch (error) {
    throw error;
  }
};

// Recipe(親) - RecipeItem(子) レシピ／レシピアイテムの登録
export const createRecipeAPI = async (data) => {
  // API動作確認用ダミーデータ
  data = {
    recipe: "俺のカレー",
    memo: "香辛料で作るよ！（ルー不使用）",
    url: "https://dancyu.jp/recipe/2021_00004322.html",
    serving: 4,
    category1: "主菜",
    category2: "印",
    like: 3,
  };
  // ダミーここまで

  const { recipe, memo, url, serving, category1, category2, like } = data;

  try {
    // 最初に recipt を作成 w/reciptItem (@hasMany ReciptItem, @manyToMany Manu)
    const recipeMany = await DataStore.save(
      new Recipe({
        recipe,
        memo,
        url,
        serving,
        category1,
        category2,
        like,
        // Menus: [Menu] @manyToMany(relationName: "RecipeMenu"),
        // RecipeItems: [RecipeItem] @hasMany(indexName: "byRecipe", fields: ["id"])
      })
    );

    // API動作確認用ダミーデータ
    data = {
      recipeItem: "トマト",
      unit: "個",
      quantity: 2,
      corner: "野菜",
    };
    //   {
    //     recipeItem: "枝豆",
    //     // unit: "g",
    //     quantity: 100,
    //     corner: "野菜",
    //   },
    //   {
    //     recipeItem: "豚挽肉",
    //     // unit: "g",
    //     quantity: 200,
    //     corner: "肉",
    //   },
    // ];
    // ダミーここまで

    const { recipeItem, unit, quantity, corner } = data;

    await DataStore.save(
      new RecipeItem({
        recipeItem,
        unit,
        quantity,
        corner,
        recipeID: recipeMany.id,
      })
    );

    // 次に, Menu を作成　(Recipt @manyToMany Manu)
    // API動作確認用ダミーデータ
    data = {
      date: "2023-06-28",
    };
    // ダミーここまで

    const { date } = data;
    const menu = await DataStore.save(
      new Menu({
        date,
      })
    );

    // 最後に Recipe と Menu のリンクモデルを作成
    await DataStore.save(
      new RecipeMenu({
        recipe: recipeMany,
        menu: menu,
      })
    );
  } catch (error) {
    throw error;
  }
};
