import { useContext } from 'react';
import { Button, Box } from '@mui/material';
import { CartContext } from '../../../context/CartContext';
import './CartContainer.css';
import CartEmptyContainer from './CartEmptyContainer';
import { Link } from 'react-router-dom';
import CheackOut from '../checkout/CheackOut';
import Swal from 'sweetalert2';


const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

let limpiar =()=>{
  Swal.fire({
    title: 'Seguro quiere borrar el carrito?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'si',
    denyButtonText: `no`,
  }).then((result) => {
    if (result.isConfirmed) {
      clearCart()
      Swal.fire('Carrito eliminado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('No se han generado cambios', '', 'info')
    }
  })
}


let total = getTotalPrice()
  return cart.length === 0 ? (
    <CartEmptyContainer />
  ) : (
    <>
      <div style={{ marginBottom: "350px", marginTop: "150px" }}>
        <h2
          className="webFont"
          style={{ display: "flex", justifyContent: "center", fontSize: "2em" }}
        >
          CARRITO
        </h2>

        <div className="contenedorCarrito"
        style={{ borderBottom: '1px solid black' }}>
          <h2>Producto</h2>
          <h2>$</h2>
          <h2>Cantidad</h2>
          <h2></h2>
        </div>

        {cart.map((elemento) => (
          <div key={elemento.id} className="contenedorCarrito" style={{}}>
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h3>{elemento.quantity}</h3>
            <Button
              sx={{ border: "2px solid black"}}
              color="inherit"
              onClick={() => deleteById(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <h2>Su total es de : ${total} </h2>
            <Box>
              <Button
                sx={{ border: "2px solid black" }}
                color="inherit"
                onClick={limpiar}
              >
                LIMPIAR CARRITO
              </Button>
              <Link to="/checkout">
                <Button sx={{ border: "2px solid black" }} color="inherit">
                  {" "}
                  FINALIZAR COMPRA
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default CartContainer;
