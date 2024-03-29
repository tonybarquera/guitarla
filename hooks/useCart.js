import { useEffect, useState, useMemo } from "react";
import { db } from './../src/data/db.js';

function useCart() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [ cart, setCart ] = useState(initialCart);
  const [ data ] = useState(db);  
  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  async function addToCart(item) {
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

  function clearCart() {
    setCart([]);
  }

  // State Derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((prev, item) => prev + (item.price * item.quantity), 0), [cart]);

  return {
    data,
    cart,
    addToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  }
}

export default useCart;