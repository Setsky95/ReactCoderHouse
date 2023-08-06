import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'


const ListadoNav = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' , gap: '10px'   }}>
    
    <Link className='webFont' to="/category/Amor"><li> Amor </li></Link>
    <Link className='webFont'  to="/category/Aventura"> <li>Aventura</li></Link>
    <Link className='webFont'  to="/category/Dinero"> <li>Dinero</li></Link>

   
    
    </Box>)
}

export default ListadoNav