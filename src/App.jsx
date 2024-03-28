import { useState } from "react";
import Header from "../components/Header";
import Guitar from "../components/guitar";
import { db } from './data/db.js';

function App() {
  const [ data, setData ] = useState(db);
  const [ cart, setCart ] = useState([]);
  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);
    
    if(itemExists >= 0) {
      if(cart[itemExists].quantity >= MAX_ITEMS) return;

      const updatedCart = [ ...cart ];
      updatedCart[itemExists].quantity++;

      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([ ...cart, item ]);
    }
  }

  function removeItem(id) {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
        if(item.id === id && item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 };
        }

        return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 }
      }

      return item;
    });

    setCart(updatedCart);
  }

  return (
    <>
      <Header 
        cart={cart}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          { data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          )) }
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
