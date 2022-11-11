import React, { useState } from "react";
import "./cart.scss";
// import { useLocation } from "react-router-dom";
import { CartContext } from "../../../contextApi/context";
function Cart() {
  const cart = React.useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [itemTotalPrice, setItemTotalPrice] = useState();

  const handleQuantity = (e, price) => {
    setQuantity(e.target.value);
    // console.log(quantity * price + price);
    // console.log(quantity);
    setItemTotalPrice(e.target.value * price);
  };
  // useEffect(() => {}, [quantity]);

  return (
    <div className="cart">
      <div className="nav">heading</div>
      <div className="body">
        <div className="productsListing">
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {cart.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>
                    <input
                      type="number"
                      id={data.id}
                      value={quantity}
                      onChange={(event) => {
                        handleQuantity(event, data.price);
                      }}
                    />
                  </td>
                  <td>{itemTotalPrice}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="subtotal"></div>
      </div>
    </div>
  );
}

export default Cart;
