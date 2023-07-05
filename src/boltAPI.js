import { DataStore } from "@aws-amplify/datastore";
import {
  Shop,
  ShoppingList,
  Recipe,
  RecipeItem,
  Menu,
  // RecipeMenu,
} from "./models";

// Shop お店登録
export const createShopAPI = async (data) => {
  // API動作確認用ダミーデータ
  data = {
    shop: "beisia",
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
    recipe: "俺のカレー２",
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
      recipeItem: "トマト２",
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
      date: "2023-07-04",
    };
    // ダミーここまで

    const { date } = data;
    const menu = await DataStore.save(
      new Menu({
        date,
      })
    );

    // // 最後に Recipe と Menu のリンクモデルを作成
    // await DataStore.save(
    //   new RecipeMenu({
    //     recipe: recipeMany,
    //     menu: menu,
    //   })
    // );
  } catch (error) {
    throw error;
  }
};

//Menu再検討
export const createMenuAPI = async (data) => {
  // API動作確認用ダミーデータ
  data = {
    date: "2023-07-12",
  };
  // ダミーここまで

  const { date } = data;

  try {
    // const { date } = data;
    const menu = await DataStore.save(
      new Menu({
        date,
      })
    );

    console.log("menu: ", menu);
    console.log("menu.id: ", menu.id);
    // ""menu" は Model と判明

    // API動作確認用ダミーデータ
    // const selectedRecipes =
    //   // [
    //   {
    //     recipeID: "589047b2-7fcd-454f-9d7e-0fc1f5557fa1",
    //     // recipeName: "俺のカレー",
    //   };
    //   {
    //     recipeID: "9328bc7d-a9bd-4a18-a682-b3de3ce93d87",
    //     recipeName: "俺のカレー２",
    //   },
    // ];
    // ダミーここまで
    // recipe IDを指定してレシピの取得
    // const fetchIdRecipeAPI = async (id) => {
    // try {
    const recipePosted = await DataStore.query(
      Recipe,
      "589047b2-7fcd-454f-9d7e-0fc1f5557fa1"
    );
    console.log("recipePosted: ", recipePosted);
    // const recipeItem = recipeList[0].RecipeItems.values.then(item => item = JSON.stringify(item, null, 2))
    // return JSON.stringify(recipe, null, 2);
    // } catch (err) {
    //   throw err;
    // }
    // };

    // // 最後に Recipe と Menu のリンクモデルを作成
    // await DataStore.save(
    //   new RecipeMenu({
    //     menu: menu,
    //     recipe: recipePosted,
    //   })
    // );
  } catch (error) {
    throw error;
  }
};

export const fetchIdRecipeItemAPI = async (id) => {
  try {
    const recipeItem = await DataStore.query(RecipeItem, (r) =>
      r.recipeID.eq(id)
    );
    console.log("APIの中⭐⭐⭐", recipeItem);
    return recipeItem;
  } catch (error) {
    throw error;
  }
};

// SelectedMenuの作成　〜　「僕のカレー」の例
// recipeID: "06b6f8da-3aaf-42bf-a7ef-c4e80949df75",
//
export const fetchMenuAPI = async (date) => {
  date = "2023-07-12";
  try {
    const MenuSelectedRecipe = await DataStore.query(Menu, date); //リレーション対象の日付;
    console.log("🤩MenuSelectedRecipe: ", MenuSelectedRecipe);
    // const recipe = await DataStore.query(Recipe, id);
    // const recipeItem = recipeList[0].RecipeItems.values.then(item => item = JSON.stringify(item, null, 2))
    // return recipe;

    //     // recipeItem recipeIdを指定してレシピ材料の取得
    // export const fetchIdRecipeItemAPI = async (id) => {
    //   try {
    //     const recipeItem = await DataStore.query(RecipeItem, (r) =>
    //       r.recipeID.eq(id)
    //     );
    //     console.log("APIの中⭐⭐⭐", recipeItem);
    //     return recipeItem;
  } catch (error) {
    throw error;
  }
};

// Menu 献立の削除
// export const deleteMenuAPI = async (id) => {
//   id = "a8b84d48-823c-44d0-a3cb-dc5ce26b0224";
//   try {
//     const deleteMenu = await DataStore.query(Menu, id);
//     console.log(deleteMenu);
//     DataStore.delete(Menu, deleteMenu);
//   } catch (err) {
//     throw err;
//   }
// };

// export const deleteMenuAPI = async () => {
// API動作確認用ダミーデータ
// ダミーここまで

// const { date } = data;

//   try {
//     const deleteMenuDay = await DataStore.query(Menu, "2024-02-07");
//     console.log("***************⭐⭐", deleteMenuDay);
//     DataStore.delete(deleteMenuDay, (r) =>
//       r.recipeID.eq("dcf081c6-e5cf-4273-957f-e71791414835")
//     );
//   } catch (err) {
//     throw err;
//   }
// };

//     export const deleteMenuAPI = async (date, id) => {
// date = "2024-02-07";
// id = "dcf081c6-e5cf-4273-957f-e71791414835";
// // console.log("⭐⭐⭐", date);
// try {
//   const deleteMenuDay = await DataStore.query(Menu, (c) =>
//     c.date("eq", date).recipeID("eq", id)
//   );
//   console.log("***************⭐⭐", deleteMenuDay);
//   // DataStore.delete(deleteMenuDay, (r) => r.recipeID.eq(id));
// } catch (err) {
//   throw err;
// }
// };

export const deleteMenuAPI = async (id) => {
  // id = "67b0171f-ee4b-4356-8017-81e6a77b4a23";
  // id = "67b0171f-ee4b-4356-8017-81e6a77b4aß23";
  // const { id } = data;
  try {
    // const deletedata = await DataStore.query(Menu, id);
    // DataStore.delete(Menu, deletedata);

    // awsのコード　に　id 追記
    const modelToDelete = await DataStore.query(
      Menu,
      "67b0171f-ee4b-4356-8017-81e6a77b4a23"
    );
    DataStore.delete(modelToDelete);
  } catch (err) {
    throw err;
  }
};

// const modelToDelete = await DataStore.query(
//   Menu,
//   "67b0171f-ee4b-4356-8017-81e6a77b4a23"
// );
// DataStore.delete(modelToDelete);

// // ****** ChatGPT#1 *********
// export const deleteRecipeAPI = async (id) => {
//   try {
//     const deleterecipe = await DataStore.query(Recipe, id);
//     DataStore.delete(Recipe, deleterecipe);
//   } catch (err) {
//     throw err;
//   }
// };

// // 削除したいアイテムのIDを指定してdeleteRecipeAPI関数を呼び出す
// // const idToDelete = "0e210584-bc28-4ec5-82e2-5031bdef271d";
// // deleteRecipeAPI(idToDelete);

// deleteRecipeAPI("0e210584-bc28-4ec5-82e2-5031bdef271d");

// 下記のエラー※※※※※※※※※※※※※※※※※※※※※※※※
// ConsoleLogger.js:134
// [ERROR] 55:14.762 DataStore
// - Id to delete or criteria required.
// Do you want to delete all?
// Pass Predicates.ALL
// {identifierOrCriteria: undefined}

// // ****** ChatGPT#2 *********
// export const deleteRecipeAPI = async (id) => {
//   // id = "0e210584-bc28-4ec5-82e2-5031bdef271d";
//   try {
//     const recipeToDelete = await DataStore.query(Recipe, id);
//     await DataStore.delete(recipeToDelete);
//   } catch (err) {
//     throw err;
//   }
// };
// // const idToDelete = "0e210584-bc28-4ec5-82e2-5031bdef271d";
// // await deleteRecipeAPI(idToDelete);
// await deleteRecipeAPI("0e210584-bc28-4ec5-82e2-5031bdef271d");

// // ConsoleLogger.js:134
// // [ERROR] 01:51.399 DataStore
// // - Model or Model Constructor required
// // {modelOrConstructor: undefined}

// // ****** ChatGPT#2　の結果を受けたトライ *********
// export const deleteRecipeAPI = async (id) => {
//   // id = "0e210584-bc28-4ec5-82e2-5031bdef271d";
//   try {
//     const recipeToDelete = await DataStore.query(Recipe, id);
//     await DataStore.delete(Recipe, recipeToDelete);
//   } catch (err) {
//     throw err;
//   }
// };
// // const idToDelete = "0e210584-bc28-4ec5-82e2-5031bdef271d";
// // await deleteRecipeAPI(idToDelete);
// await deleteRecipeAPI("0e210584-bc28-4ec5-82e2-5031bdef271d");

// ChatGPT#1と同じ結果で堂々巡りに💦
// - Id to delete or criteria required.
// Do you want to delete all?
// Pass Predicates.ALL
// {identifierOrCriteria: undefined}

// ****** ChatGPT#2　の結果を受けたトライ＃２ *********
export const deleteRecipeAPI = async (id) => {
  // id = "0e210584-bc28-4ec5-82e2-5031bdef271d";
  try {
    await DataStore.delete(Recipe, id);
  } catch (err) {
    throw err;
  }
};

deleteRecipeAPI("0e210584-bc28-4ec5-82e2-5031bdef271d");
// エラーは出ないが、DBから消去されず
