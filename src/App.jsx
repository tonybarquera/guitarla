import useCart from './../hooks/useCart.js';
import Header from "../components/Header";
import Guitar from "../components/guitar";

function App() {
  const { data, cart, addToCart, removeItem, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart();

  return (
    <>
      <Header 
        cart={cart}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="max-w-7xl mx-auto mt-5 bg-blue-100 px-10">
        <h2 className="text-center text-orange-400">Nuestra Colección</h2>

        <div className="grid grid-cols-3 mt-5">
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
