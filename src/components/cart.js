import React, { useEffect, useState } from 'react';

export default function Cart({ state, dispatch }) {
  const { cart } = state;
  console.log(cart);
  const [total, setTotal] = useState(0);
  const changeQty = (id, qty) => {
    dispatch({
      type: 'CHANGE_CART_QTY',
      payload: {
        id,
        qty,
      },
    });
  };
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#ececec',
        padding: 10,
        width: '25%',
      }}
    >
      <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
      <b style={{ alignSelf: 'center' }}>Subtotal: $ {total}</b>
      {cart.length > 0 ? (
        <>
          {cart.map((pro) => {
            return (
              <div
                key={pro.title}
                style={{
                  display: 'flex',
                  padding: 10,
                  border: '1px solid grey',
                  margin: 5,
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: 10 }}>
                  <img
                    src={pro.thumbnail}
                    alt={pro.title}
                    style={{ width: 70, objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{pro.title}</span>
                    <b>$ {pro.price}</b>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <button onClick={() => changeQty(pro.id, pro.qty - 1)}>
                    -
                  </button>
                  <span>{pro.qty}</span>
                  <button onClick={() => changeQty(pro.id, pro.qty + 1)}>
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <span>cart is empty</span>
      )}
    </div>
  );
}
