import { useContext } from 'react';
import { Button } from '@mui/material';
import { CartContext } from '../../../context/CartContext';
import './CartContainer.css';
import CartEmptyContainer from './CartEmptyContainer';
import { Link } from 'react-router-dom';
import CheackOut from '../checkout/CheackOut';


const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
let total = getTotalPrice()
  return (
    cart.length === 0 ? (
      <CartEmptyContainer/>
    ) : (
      <>
        <div>
          <h2 className="webFont" style={{ display: "flex", justifyContent: "center" }}>CARRITO</h2>

          <div className="contenedorCarrito">
            <h2>nombre</h2>
            <h2>precio</h2>
            <h2>cantidad</h2>
            <h2></h2>
          </div>

          {cart.map((elemento) => (
            <div key={elemento.id} className="contenedorCarrito" style={{ border: "2px solid black" }}>
              <h3>{elemento.title}</h3>
              <h3>{elemento.price}</h3>
              <h3>{elemento.quantity}</h3>
              <Button sx={{ border: "2px solid lightblue" }} onClick={() => deleteById(elemento.id)}>Eliminar</Button>
            </div>
          ))}

          <h2>total: {total} </h2>
          <Button sx={{ border: "2px solid lightblue" }} onClick={clearCart}>LIMPIAR CARRITO</Button>
          <Link to="/checkout">
          <Button sx={{ border: "2px solid lightblue" }}>FINALIZAR COMPRA</Button>
          </Link>
        </div>
      </>
    )
  );
};

export default CartContainer;
