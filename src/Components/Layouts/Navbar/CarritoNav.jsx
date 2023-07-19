import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import Cart from '../../Pages/Cart/CartContainer';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export default function CarritoNav() {

  const { cart } = useContext (CartContext) 

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
}

