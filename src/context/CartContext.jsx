
import { createContext, useState } from "react"

export const CartContext = createContext ();

const CartContextComponent = ({children}) => {
  const [cart, setCart] = useState ( [] )
  const addToCart = (productoAgregado) => {
    let existente = cart.some(
      (elemento) => elemento.id === productoAgregado.id);
    if (existente){
    let newArr = cart.map(elemento =>{
      if (productoAgregado.id === elemento.id){
      return  {...elemento, quantity:elemento.quantity+ productoAgregado.quantity}
    }else {
      return elemento
    }
    })
  setCart(newArr)}

    else {
    setCart([...cart, productoAgregado]);}
  };

const clearCart = () =>{
  setCart ([])
}

const getQuantityById = (id) => {
  let productoID = cart.find(( elemento ) => elemento.id === +id)

  return productoID?.quantity
}

const deleteById = (id) => {
let newArr= cart.filter ((elemento) =>  elemento.id !== id)
setCart(newArr)
}
  let data= {
    cart,
    setCart,
    addToCart,
    clearCart,
    deleteById,
    getQuantityById,
    
  };
  return  ( 
     <CartContext.Provider value={data}>
      {children}
     </CartContext.Provider>
     )
  
};

export default CartContextComponent