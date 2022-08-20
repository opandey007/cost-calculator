import { useEffect, useReducer } from 'react';
import './App.css';
import Cart from './components/cart';
import { Products } from './components/product';
import { CartReducer } from './reducers/cartReducer';

function App() {
  // useEffect(() => {
  //   return () => {
  //     fetchProducts();
  //   };
  // }, []);

  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((oData) => {
        console.log(oData.products);
        dispatch({
          type: 'ADD_PRODUCTS',
          payload: oData.products,
        });
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
