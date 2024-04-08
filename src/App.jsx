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
      <main className="max-w-7xl mx-auto mt-14 px-3 md:px-5">
        <h2 className="text-center text-4xl font-bold text-orange-400">Nuestra Colección</h2>

        <div className="mt-14 gap-5 lg:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          { data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          )) }
        </div>
      </main>

      <footer className="bg-gray-900 py-14 mt-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-center text-2xl mx-2">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
