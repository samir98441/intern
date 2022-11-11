import "./main.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Body from "./Body";
import { CartContext } from "../../contextApi/context";
import Cart from "./cart/Cart";

function Main() {
  const [theme, setTheme] = useState("light-theme");
  const [mode, setMode] = useState(true);
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const onToggle = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    mode ? setMode(false) : setMode(true);
  };

  return (
    <CartContext.Provider value={cart}>
      <div className={theme}>
        <div className="navbar">
          <div className="left">
            <Link to="/main" style={{ textDecoration: "none" }}>
              <span>AmaZon.c0m</span>
            </Link>

            {mode ? (
              <DarkModeOutlinedIcon onClick={onToggle} />
            ) : (
              <WbSunnyIcon onClick={onToggle} />
            )}
            <div className="search">
              <SearchOutlinedIcon />
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="right">
            <ShoppingCartOutlinedIcon
              onClick={() => {
                displayCart ? setDisplayCart(false) : setDisplayCart(true);
              }}
            />

            <div className="user">
              <img
                src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>sameer</span>
            </div>
          </div>
        </div>
        {displayCart ? <Cart /> : <Body />}
      </div>
    </CartContext.Provider>
  );
}

export default Main;
