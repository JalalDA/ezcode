// import Header from "./components/header/Header";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
import { useState } from "react";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { Counter } from "./features/counter/Counter";
import Home from "./pages/home/Home";
// import BarChart from "./components/bardata.jsx/BarChart";
// import { UserData } from "./components/Data";
// import Headerdua from "./components/header/Headerdua";
// import HeaderFunction from './components/header/HeaderFunction'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <Provider store = {store}>
      <UserContext.Provider value={{show, setShow}}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Home/>
        }/>
        </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
