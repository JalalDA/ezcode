import Header from "./components/header/Header";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import { useState } from "react";
import UserContext from "./UserContext";
import Profile from "./pages/profile/Profile";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={{show, setShow}}>
        <Header/>
        <Profile/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
