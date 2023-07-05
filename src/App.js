import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

// ⭐️APIのインポート
import {
  createShopAPI,
  createShoppingListAPI,
  createRecipeAPI,
  createMenuAPI,
  fetchMenuAPI,
  deleteMenuAPI,
  deleteRecipeAPI,
} from "./boltAPI";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user);

  // ⭐️boltAPI用フロント側コード
  // Shop お店登録
  const onClickCreateShopAPI = async (data) => {
    await createShopAPI(data);
  };

  // ShoppingList 買い物リスト登録
  const onClickCreateShoppingListAPI = async (data) => {
    await createShoppingListAPI(data);
  };

  // Recipe & RecipeItem 登録
  const onClickCreateRecipeAPI = async (data) => {
    await createRecipeAPI(data);
  };

  // Recipe 削除
  const onClickDeleteRecipeAPI = async (data) => {
    await deleteRecipeAPI(data);
  };

  // Menu 登録
  const onClickCreateMenuAPI = async (data) => {
    await createMenuAPI(data);
  };
  // Menu 削除
  const onClickDeleteMenuAPI = async (data) => {
    await deleteMenuAPI(data);
  };
  // Menu 取得
  const onClickFetchMenuAPI = async (data) => {
    await fetchMenuAPI(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* API起動ボタン */}
        <button onClick={onClickCreateShopAPI}>click create Shop API</button>
        <button onClick={onClickCreateShoppingListAPI}>
          click create ShoppingList API
        </button>
        <button onClick={onClickCreateRecipeAPI}>
          click create Recipe API
        </button>
        <button onClick={onClickDeleteRecipeAPI}>
          click Delete Recipe API
        </button>
        <button onClick={onClickCreateMenuAPI}>click create Menu API</button>
        <button onClick={onClickDeleteMenuAPI}>click Delete Menu API</button>
        <button onClick={onClickFetchMenuAPI}>click Fetch Menu API</button>

        <h2>Hellow susumu!</h2>
        {user ? (
          <>
            <h3>私は権限を持っています：{user.username}</h3>
            <h3>私は権限を持っています：{user.attributes.sub}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <h3>権限がありません</h3>
        )}
      </header>
    </div>
  );
}

// export default App;
export default withAuthenticator(App);
