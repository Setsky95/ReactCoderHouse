import {useContext} from 'react'
import { Button } from '@mui/material';
import { CartContext } from '../../../context/CartContext'
import './CartContainer.css'

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
 
 
return (
    
<div >
<h2 style={{ display: "flex", justifyContent: "center" }}>CARRITO</h2>

<div className="contenedorCarrito">

<h2>nombre</h2>
<h2>precio</h2>
<h2>cantidad</h2>


</div>

    
{ cart.map((elemento) => {
   return  (
   
        <div key={elemento.id} className="contenedorCarrito" style={{border:" 2px solid black"}}>
          <h3 >{elemento.title}</h3>
          <h3>{elemento.price}</h3>
          <h3>{elemento.quantity}</h3>
          <Button sx={{border:" 2px solid lightblue"} } onClick={()=>deleteById(elemento.id)}>Eliminar</Button>



</div>
      )
    })}
    <Button sx={{border:" 2px solid lightblue"} } onClick={clearCart}>LIMPIAR CARRITO</Button>
            </div>

  )
};
export default CartContainer;