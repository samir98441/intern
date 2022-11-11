import React from "react";

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

  const cart = React.useContext(CartContext);

  const addToCart = (records) => {
    cart.push(records);
    alert(`${records.name} added to cart`);
    console.log(cart);
  };

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
