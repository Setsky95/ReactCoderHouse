import  { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { db } from "../../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore"
import {useParams} from "react-router-dom"

 
const ProductListContainer = () => {
  //////////////////LOGICA//////////////////////////

  const [items, setItems] = useState ([]);
  const {categoryName} = useParams()

useEffect (()=>{
let consulta;

let producsCollection = collection(db, "products");
if (!categoryName) {
  consulta = producsCollection;
} else {
  consulta = query(producsCollection, where("category", "==", categoryName));
}

getDocs(consulta).then(res=> {

  let arrayProdFirebase = res.docs.map (product => {
    return {...product.data(), id: product.id}
  })
setItems(arrayProdFirebase)
});
},[categoryName]);


/////////////////////RETORNA////////////////////////

  return (
    <ProductList items={items} />
  ); 
  
};

export default ProductListContainer;