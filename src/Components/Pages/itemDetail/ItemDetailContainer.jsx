import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react";
import { products } from "../../../productMock";
import {useParams}  from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

const {addToCart, getQuantityById} = useContext(CartContext)

  useEffect(() => {
    let refCollection = collection (db, "products")
 let refDoc = doc(refCollection, id)
 getDoc(refDoc).then (res => setProduct ({...res.data(), id:res.id}) )


  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let productoAgregado = {
      ...product,
      quantity: cantidad,
      finalPrice: product.price * cantidad
    };

addToCart(productoAgregado) 

//let QuantityOnCart = getQuantityById(id);//

};
  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito}  />;
};


export default ItemDetailContainer;