const Guitar = ({ guitar, addToCart }) => {
  const { name, description, price, image } = guitar;

  return (
    <div className="flex items-center hover:scale-110 transition-all">
      <div>
        <img
          className="w-auto hover:-rotate-3"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="p-2 flex flex-col justify-center h-full space-y-2 lg:space-y-4">
        <h3 className="text-black text-2xl">{name}</h3>
        <p className="text-md">{description}</p>
        <p className="font-black text-orange-400 text-4xl">${price}</p>
        <button 
          type="button" 
          className="w-full bg-gray-900 text-white font-black cursor-pointer uppercase p-2 shadow-md rounded-md hover:bg-gray-700"
          onClick={() => addToCart(guitar)}  
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
};

export default Guitar;