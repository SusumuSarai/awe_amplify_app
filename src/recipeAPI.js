import { DataStore } from "@aws-amplify/datastore";
import { Recipe } from "./models";
// import { Recipe, RecipeItem } from "./models";

export const createRecipeAPI = async (data) => {
  // const { content } = data;
  try {
    await DataStore.save(
      new Recipe({
        recipe: "BBQ4",
        memo: "My friend's Best!",
        url: "",
        RecipeItems: ["beaf", "onion", "pumpkin"],
      })
    );
  } catch (error) {
    throw error;
  }
};

// export const createRecipeItemAPI = async (data) => {
//   // const { content } = data;
//   try {
//     await DataStore.save(
//       new RecipeItem({
//         RecipeItem: "Potato",
//         quantity: 2,
//         recipe_id: "f0200485-a319-4822-83a9-cc04b8522695",
//         RecipeItems: ["Potato", "chiken", "Carrot"],
//       })
//     );
//   } catch (error) {
//     throw error;
//   }
// };
