import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import SpecialOrder from "./components/SpecialOrder/SpecialOrder";
import RequireAuth from "./components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <SpecialOrder></SpecialOrder>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
