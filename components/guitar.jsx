const Guitar = ({ guitar, addToCart }) => {
  const { name, description, price, image } = guitar;

  return (
    <div className="border border-blue-300 grid grid-cols-2 grid-rows-1">
      <div className="">
        <img
          className="h-auto"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="bg-red-100 ">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button 
          type="button" 
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitar)}  
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
};

export default Guitar;