import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function CarritoNav() {
  return (
    <Badge badgeContent={20} color="secondary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}