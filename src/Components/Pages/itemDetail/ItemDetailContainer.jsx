import ItemDetail from "./ItemDetail"
import { useEffect, useState, useContext } from "react";
import { products } from "../../../productMock";
import {useParams}  from "react-router-dom"
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

const {addToCart} = useContext(CartContext)

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    })

    promesa.then((res) => setProduct(res)).catch((err) => console.log(err))

  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let productoAgregado = {
      ...product,
      quantity: cantidad,
      finalPrice: product.price * cantidad
    };

addToCart(productoAgregado) 

};
  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};
export default ItemDetailContainer;