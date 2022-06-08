import Header from "./components/header/Header";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
import { useState } from "react";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Counter } from "./features/counter/Counter";

function App() {
  const [show, setShow] = useState(false)
  console.log(store);
  return (
    <div className="App">
      <Provider store = {store}>
      <UserContext.Provider value={{show, setShow}}>
        <Header/>
        <Counter/>
      </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
