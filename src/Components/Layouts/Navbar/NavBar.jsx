import React from 'react';
import ListadoNav from './ListadoNav';
import CarritoNav from './CarritoNav';
import { Box } from '@mui/material';

const NavBar = () => {
  return (
    <header>

<Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems:"center", marginBottom:"30px"  }}>
  <img src="https://www.edigitalagency.com.au/wp-content/uploads/apple-logo-png-black.png" style={{width:"3%"}} alt="logo"/> 
  <ListadoNav/>
   <CarritoNav />
   </Box>
   </header>

  )
}

export default NavBar