import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react";
import { products } from "../../../productMock";
import {useParams}  from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

const {addToCart, getQuantityById} = useContext(CartContext)


  useEffect(() => {
    let refCollection = collection (db, "products")
 let refDoc = doc(refCollection, id)
 getDoc(refDoc).then (res => setProduct ({...res.data(), id:res.id}) )


  }, [id]);

  let cantidadEnCarrito = getQuantityById(id); //NO LOGRÉ HACER QUE NO LLEGUE COMO UNDEFINED


  const agregarAlCarrito = (cantidad) => {
    let productoAgregado = {
      ...product,
      quantity: cantidad,
      finalPrice: product.price * cantidad
    };
   
addToCart(productoAgregado) 

toast.success(' Producto agregado!', {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });Toastify


 

};
  return (
    <>
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
    <ToastContainer />
    </>

  );
};


export default ItemDetailContainer;