import React, { useEffect } from "react";

import "./body.scss";
import Data from "../../data/records.json";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { CartContext } from "../../contextApi/context";

function Body() {
  const ratingStar = (val) => {
    const stars = [];
    for (let i = 0; i < val; i++) {
      stars.push(<StarHalfIcon key={i} />);
    }
    return stars;
  };

  const { cart, setCart, setCartLength } = React.useContext(CartContext);

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...productExists,
                quantity: productExists.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <div className="body">
      {Data &&
        Data.map((records) => {
          return (
            <div className="items" key={records.id} id="one">
              <img src={records.image} alt="bag" />

              <ShoppingCartOutlinedIcon
                className="cart"
                onClick={() => {
                  addToCart(records);
                }}
              />
              <div className="itemsDescription">
                <span className="itemName">{records.name}</span>
                <span className="itemPrice">${records.price}</span>
                <span className="itemRatings">
                  {ratingStar(records.rating)}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Body;
