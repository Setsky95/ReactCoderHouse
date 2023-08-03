import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Padding } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup"



const CheackOut = () => {

  const navigate = useNavigate() //el hook devuelve una función.

    const { handleSubmit, handleChange, errors} = useFormik ({
initialValues: {
  nombre:"",
  apellido:"",
  tel:"",
  email:"",
},
onSubmit: (data) => {
  console.log(data);

},
validationSchema: Yup.object({
  nombre: Yup.string("Debe ser texto").required("Campo obligatorio").min(2,"Debe tener al menos 2 caracteres").max(25,"Su respuesta es demasiado larga"),
  apellido:Yup.string("Debe ser texto").required("Campo obligatorio").min(2, "Debe tener al menos 2 caracteres").max(25,"Su respuesta es demasiado larga"),
  tel: Yup.number("Debe ingresar su número").required("Campo obligatorio"),
  email: Yup.string("Debe ser texto").email("Debe ingresar un email válido").required("Campo obligatorio"),
}),
validateOnChange: false
    });
  

    console.log(errors)

  
  
  
  
 return (
   <div>
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
      CheackOut</div>
  
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