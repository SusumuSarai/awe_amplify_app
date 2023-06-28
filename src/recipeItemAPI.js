import { DataStore } from "@aws-amplify/datastore";
import { RecipeItem } from "./models";

// export const createRecipeAPI = async (data) => {
//   // const { content } = data;
//   try {
//     await DataStore.save(
//       new Recipe({
//         recipe: "BBQ2",
//         memo: "My friend's Best!",
//         url: "",
//         RecipeItems: ["beaf", "onion", "pumpkin"],
//       })
//     );
//   } catch (error) {
//     throw error;
//   }
// };

export const createRecipeItemAPI = async (data) => {
  // const { content } = data;
  try {
    await DataStore.save(
      new RecipeItem({
        recipeItem: "Potato",
        quantity: 2,
        recipeID: "f0200485-a319-4822-83a9-cc04b8522695",
      })
      // await DataStore.save(
      //   new RecipeItem({
      //     recipeItem: "Lorem ipsum dolor sit amet",
      //     quantity: 1020,
      //     recipe_id: "Lorem ipsum dolor sit amet",
      //     recipeID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
      //   })
    );
  } catch (error) {
    throw error;
  }
};
