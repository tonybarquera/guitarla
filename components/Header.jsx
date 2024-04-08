import { Fragment } from "react";

function Header({ cart, removeItem, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal }) {
  return (
    <header className="py-14 md:py-24 header">
      <div className="max-w-7xl mx-auto px-3 md:px-5">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
          <div className="w-60">
            <a href="index.html">
              <img
                className="w-full"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="flex w-full justify-end pr-1 md:pr-0">
            <div className="carrito">
              <img
                className="w-full"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3 shadow-md border border-slate-200 rounded-md">
                {isEmpty ? (
                  <p className="text-center text-xl font-bold">The cart is empty</p>
                ) : (
                  <Fragment>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-500">
                          <th className="font-black">Imagen</th>
                          <th className="font-black">Nombre</th>
                          <th className="font-black">Precio</th>
                          <th className="font-black">Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id} className="border-b border-slate-400">
                            <td>
                              <img
                                className="w-100 mx-auto"
                                src={`/img/${item.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td className="text-center">{item.name}</td>
                            <td className="text-center">${item.price}</td>
                            <td className="text-center space-x-2">
                              <button type="button" className="" onClick={() => decreaseQuantity(item.id)}>
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button type="button" className="" onClick={() => increaseQuantity(item.id)}>
                                +
                              </button>
                            </td>
                            <td className="min-w-5">
                              <button className="w-full text-center bg-red-600 rounded-full text-white font-bold" type="button" onClick={() => removeItem(item.id)}>
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end py-6 font-bold text-lg">
                      Total pagar: <span className="text-orange-400 font-black">${cartTotal}</span>
                    </p>
                    <button className="bg-gray-900 text-white uppercase w-full py-2 rounded-md font-bold hover:bg-gray-600 cursor-pointer" onClick={clearCart}>
                      Vaciar Carrito
                    </button>
                  </Fragment>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
