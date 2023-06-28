import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

import { createRecipeAPI } from "./recipeAPI";
import { createRecipeItemAPI } from "./recipeItemAPI";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user);
  const onClickCreateRecipeAPI = async (data) => {
    await createRecipeAPI(data);
  };
  const onClickCreateRecipeItemAPI = async (data) => {
    await createRecipeItemAPI(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClickCreateRecipeAPI}>
          click create Recipe API
        </button>
        <button onClick={onClickCreateRecipeItemAPI}>
          click create RecipeItem API
        </button>
        <h2>Hellow susumu!</h2>
        {user ? (
          <>
            <h3>私は権限を持っています：{user.username}</h3>
            <h3>私は権限を持っています：{user.attributes.sub}</h3>
            <button onClick={signOut}>サインアウト</button>
            {/* <input
              value={text}
              onChange={(event) => setText(event.target.value)}
            /> */}
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
