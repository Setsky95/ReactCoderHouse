
import { createContext, useState } from "react"

export const CartContext = createContext ();

const CartContextComponent = ({children}) => {
  const [cart, setCart] = useState (JSON.parse( localStorage.getItem("cart")) || [])
  const addToCart = (productoAgregado) => {
    let existente = cart.some(
      (elemento) => elemento.id === productoAgregado.id);
    if (existente){
    let newArr = cart.map(elemento =>{
      if (productoAgregado.id === elemento.id){
      return  {...elemento, quantity:productoAgregado.quantity}
    }else {
      return elemento
    }
    })
    localStorage.setItem("cart", JSON.stringify(newArr))
  setCart(newArr)}

    else {
      localStorage.setItem("cart", JSON.stringify([...cart, productoAgregado]))
    setCart([...cart, productoAgregado]);}
    
  };

const clearCart = () =>{
  localStorage.removeItem("cart")
  setCart ([])
}
const getTotalPrice = () => {
  let total = cart.reduce ((acc, elemento)=>{
    return acc+ (elemento.price * elemento.quantity)
  },0)
  return total
}

const getQuantityById = (id) => {
  let cantidadPorId = cart.find(( e ) => e.id === +id)
  return cantidadPorId?.quantity
}



const deleteById = (id) => {
let newArr= cart.filter ((elemento) =>  elemento.id !== id)
localStorage.setItem("cart", JSON.stringify(newArr))
setCart(newArr)

}
  let data= {
    cart,
    setCart,
    addToCart,
    clearCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    
  };
  return  ( 
     <CartContext.Provider value={data}>
      {children}
     </CartContext.Provider>
     )
  
};

export default CartContextComponent