import  { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { restos } from "../../../productMock";
 
const ProductListContainer = () => {
  //////////////////LOGICA//////////////////////////

  const [items, setItems] = useState ([]);
useEffect (()=>{
  const tarea = new Promise ((resolve, reject)=>{
    resolve(restos);
  });
  
  tarea
    .then((res) => setItems(res))
    .catch((error) => console.log("mal"))

},[]);


/////////////////////RETORNA////////////////////////

  return (
    <ProductList items={items} />
  ); 
  
};

export default ProductListContainer;