import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

export default function CarritoNav() {
  return (
    <Link to="/cart">

    <Badge badgeContent={20} color="secondary">
      <ShoppingCartIcon color="action" />
    </Badge>
    </Link>
  );
}

