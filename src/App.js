import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/frontend/Navbar";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Signin from "./components/frontend/Signin";
import { useContext, useState } from "react";
import Admin from "./components/frontend/Admin";
import { Navigate } from "react-router-dom";
import Admindash from "./components/frontend/Admindash";
import Userdash from "./components/frontend/Userdash";

function App() {
  const [user, setUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/admin/*"
            element={
              user ? <Admindash setuser={setUser} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/user/*"
            element={
              user ? <Userdash setuser={setUser} /> : <Navigate to="/" />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin setuser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
