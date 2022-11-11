import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Cart from "./components/main/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
