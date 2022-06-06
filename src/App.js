import Header from "./components/header/Header";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import { useState } from "react";
import UserContext from "./UserContext";

function App() {
  const [showRegist, setShowRegist] = useState('dontshow')
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={{showRegist, setShowRegist, setShowLogin, showLogin}}>
        <Header/>
        <Home/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
