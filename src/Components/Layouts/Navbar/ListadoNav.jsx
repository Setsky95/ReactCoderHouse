import React from 'react'
import { Box } from '@mui/material'


const ListadoNav = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' , gap: '10px'   }}>
    
    <li style={{color: "peru"}}>INICIO</li>
    <li>COLECCIONES</li>
    <li>CAMPAÑAS</li>
   
    
    </Box>)
}

export default ListadoNav