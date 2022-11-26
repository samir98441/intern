import React, { useEffect } from "react";
import "./cart.scss";

import { CartContext } from "../../../contextApi/context";

function Cart() {
  const { cart, setCart, setCartLength } = React.useContext(CartContext);

  const handleQuantity = (e, data) => {
    setCart(
      cart.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: e.target.value,
            }
          : item
      )
    );
  };
  const handleDelete = (data) => {
    data.quantity > 0
      ? setCart(
          cart.map((item) =>
            item.id === data.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
        )
      : setCart(cart.filter((item) => item.id !== data.id));
  };
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

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
              <th> </th>
            </tr>
            {cart.map((data) => {
              return data.quantity != null ? (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>
                    <input
                      type="number"
                      id={data.id}
                      value={data.quantity}
                      onChange={(event) => {
                        handleQuantity(event, data);
                      }}
                    />
                  </td>
                  <td>{data.price * data.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(data);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ) : null;
            })}
          </table>
          <h2>
            {`Total:  ${cart
              .map((data) => data.price * data.quantity)
              .reduce(
                (initialValue, currentVaue) => initialValue + currentVaue,
                0
              )}
            `}
          </h2>
        </div>
        <div className="subtotal"></div>
      </div>
    </div>
  );
}

export default Cart;
