import React from 'react';
import ListadoNav from './ListadoNav';
import CarritoNav from './CarritoNav';
import { Box } from '@mui/material';
import {Outlet} from "react-router-dom";
import VeganSwitch from '../../Common/VeganSwitch';
import {Link} from "react-router-dom";
import LogoNav from '../../Common/LogoNav';
import Footer from '../Footer';

const NavBar = () => {
  return (
    <div >
      <Box
        sx={{
          margin: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LogoNav />
        <VeganSwitch />
        <ListadoNav />
        <CarritoNav />
      </Box>

      <Outlet />
      <Footer/>
    </div>
  );
};

export default NavBar