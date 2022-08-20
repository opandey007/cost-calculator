import { CartReducer } from '../reducers/cartReducer';

export const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log(state);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
      }}
    >
      {products.map((pro) => {
        return (
          <div
            key={pro.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 10,
              border: '1px solid grey',
              marginTop: 10,
              gap: 10,
              width: '30%',
            }}
          >
            <img src={pro.thumbnail} alt={pro.title} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{pro.title}</span>
              <b>$ {pro.price}</b>
            </div>

            {cart.some((p) => p.id === pro.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: 'red',
                  color: 'white',
                }}
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: pro,
                  });
                }}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: 'green',
                  color: 'white',
                }}
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: pro.id,
                      title: pro.title,
                      thumbnail: pro.thumbnail,
                      qty: 1,
                      price: pro.price,
                    },
                  });
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
