import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Navbar } from "./Pages/Navbar";
import { Private } from "./Pages/PrivateRoute";
import { Settings } from "./Pages/Setting";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        ></Route>
        <Route
          path="/dashboard/setting"
          element={
            <Private>
              <Settings />
            </Private>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
