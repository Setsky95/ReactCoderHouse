import { Link } from "react-router-dom"

const CartEmptyContainer = () => {
  return (
    <div>
            <h1 className="webFont" style={{textAlign:"center"}}>SU CARRITO AÚN ESTÁ VACÍO</h1>

    <div style={{display:"flex", justifyContent:"center"}}>
    <Link to="/" >
    <img src="../src/imgs/giphy.gif" alt="gif" style={{ display:"flex", justifyContent:"center"}} />
</Link>
    </div>
    </div>

  )
}

export default CartEmptyContainer

