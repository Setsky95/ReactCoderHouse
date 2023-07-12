import  { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { products } from "../../../productMock";
import {useParams} from "react-router-dom"
 
const ProductListContainer = () => {
  //////////////////LOGICA//////////////////////////

  const [items, setItems] = useState ([]);
  const {categoryName} = useParams()

useEffect (()=>{

  let itemsFiltrados = products.filter( e => e.feel === categoryName)

  const tarea = new Promise ((resolve, reject)=>{
    resolve(categoryName? itemsFiltrados : products);
  });
  
  tarea
    .then((res) => setItems(res))
    .catch((error) => console.log("mal"))

},[categoryName]);


/////////////////////RETORNA////////////////////////

  return (
    <ProductList items={items} />
  ); 
  
};

export default ProductListContainer;