import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DoorBack, Padding } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup"
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import OrderIdSucces from "./OrderIdSucces";
import Swal from "sweetalert2"





const CheackOut = () => {


  const {cart,getTotalPrice } = useContext(CartContext)
  const [orderId, setOrderId] = useState ("")
  let total =  getTotalPrice()

  const navigate = useNavigate() //el hook devuelve una función.

    const { handleSubmit, handleChange, errors} = useFormik ({
initialValues: {
  nombre:"",
  apellido:"",
  tel:"",
  email:"",
},

onSubmit: (data) => { //FUNCION QUE VA A DISPARARSE CON EL SUBMIT//
let order ={ 
buyer: data,
items: cart,
total: total,
date:serverTimestamp() };
Swal.fire({
  title: '¡Compra realizada!',
  width: 600,
  padding: '1em',
  color: '#716add',
  background: '#fff url(https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcloud-art&psig=AOvVaw1Lw03jKnPL08vj5IaBEXXn&ust=1691422797979000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDBzIqvyIADFQAAAAAdAAAAABAF)',

})


// CREACION DE ORDEN QUE VA A IR A FIRESTORE //
let ordersCollections = collection ( db,"orders" )
addDoc(ordersCollections,order).then( res => setOrderId(res.id));

cart.forEach ((product) =>{
  updateDoc (doc(db, "products", product.id),{stock: product.stock - product.quantity})
}) 



},
validationSchema: Yup.object({
  nombre: Yup.string("Debe ser texto").required("Campo obligatorio").min(2,"Debe tener al menos 2 caracteres").max(25,"Su respuesta es demasiado larga"),
  apellido:Yup.string("Debe ser texto").required("Campo obligatorio").min(2, "Debe tener al menos 2 caracteres").max(25,"Su respuesta es demasiado larga"),
  tel: Yup.number("Debe ingresar su número").required("Campo obligatorio"),
  email: Yup.string("Debe ser texto").email("Debe ingresar un email válido").required("Campo obligatorio"),
}),
validateOnChange: false
    });
  

 return (
   <div>
      {
        orderId? /* está generada la orden? */  
        (<OrderIdSucces orderId={orderId} />) 
        :/* sino cargá esto */ 
        (  
        <form onSubmit={handleSubmit}>
          <div>
          <TextField id="standard-basic" label="Nombre" variant="standard" name="nombre" onChange={handleChange} error={ errors.nombre} helperText={errors.nombre} />
          <TextField id="standard-basic" label="Apellido" variant="standard" name="apellido" onChange={handleChange} error={ errors.apellido} helperText={errors.apellido} />
          <TextField id="standard-basic" label="Tel." variant="standard" name="tel" onChange={handleChange} error={ errors.tel} helperText={errors.tel} />
          <TextField id="standard-basic" label="Email" variant="standard" name="email" onChange={handleChange} error={ errors.email}  helperText={errors.email} />
          </div>
          <div>
    
            <Button type="submit" variant="outlined">Finalizar</Button>
            <Button type="button" variant="outlined">Cancelar</Button>
            </div>
    
    
          </form>
    )
      }
      </div>
  
 )
}
export default CheackOut


// FORMA DE CAPTURA TRADICIONAL //
/*  const funcionDeInputs = (evento) => {
   //evento.target.name va entre corchetes por que es un dato tipo string.
   setUserData({ ...userData, [evento.target.name]: evento.target.value })
  }
 const funcionDelForm = (evento) => {
   //al estar en el evento on submit va a recibir el parámetro con la informacion del submit
   evento.preventDefault()
 
 // ACÁ SE HARIA EL POST O AXIOS
   console.log(userData)
   alert("serás redirigido")
   navigate ("/")
 }

  /*  dejo este como ejemplo clásico
      const funcionDelEmail= (evento)=> {
        setUserData({...userData, email: evento.target.value })
      }  */