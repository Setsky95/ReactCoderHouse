import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CounterContainer from "../../Common/Counter/CounterContainer";
import ProductCardDetailContainer from "../../Common/ProductCardDetail/ProductCardDetailContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link } from 'react-router-dom';


const ItemDetail = ({
  product,
  agregarAlCarrito,
  QuantityOnCart,
  cantidadEnCarrito,
}) => {
  return (
    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', marginBottom: '200px', marginTop: "100px" }}>
      <Grid container spacing={2}>
        {/* Imagen del producto */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src={product.img} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>

        {/* Información del producto */}
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: "200px" }}>
            {/* Título */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {product.title}
            </Typography>

            {/* Descripción */}
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              {product.description}
            </Typography>

            {/* Precio */}
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              ${product.price}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>

            <CounterContainer
              stock={product.stock}
              agregarAlCarrito={agregarAlCarrito}
              cantidadEnCarrito={cantidadEnCarrito}
            />
                        </Typography>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;
