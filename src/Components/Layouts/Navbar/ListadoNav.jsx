import React from 'react'
import { Box } from '@mui/material'


const ListadoNav = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' , gap: '10px'   }}>
    
    <li>Restaurantes</li>
    <li>Historial</li>
    <li>Lo último</li>

   
    
    </Box>)
}

export default ListadoNav