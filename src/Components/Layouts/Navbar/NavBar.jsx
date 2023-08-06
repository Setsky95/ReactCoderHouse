import React from 'react';
import ListadoNav from './ListadoNav';
import CarritoNav from './CarritoNav';
import { Box } from '@mui/material';
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import Footer from '../Footer';
import LogoNav from './LogoNav';
import nav from './nav.css'
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';



const NavBar = () => {
  return (
    <Box>
      <Box
        sx={{
          margin: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: '1px solid #ccc', // 

          
          
        }}
      >
{           <LogoNav/>
 }
        <ListadoNav />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Link to="/about">
<CloudQueueRoundedIcon color="inherit"/>
          </Link>
        <CarritoNav />
              </Box>

      </Box>

      <Outlet />
      <Footer />
    </Box>
  );
};

export default NavBar