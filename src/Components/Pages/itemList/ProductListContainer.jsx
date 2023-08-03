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

let productsCollection = collection(db, "products");
if (!categoryName) {
  consulta = productsCollection;
} else {
  consulta = query(productsCollection, where("feel", "==", categoryName));
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