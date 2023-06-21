import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from "./ProductList.css";
import { Box, Button } from '@mui/material';


export default function ProductList() {

  const handleExpandClick = () => {
  
  };

  return (

    

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
  
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image="src\Imgs\CuervosChica.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <ul class="lista-ingredientes">
  <li>Pan</li>
  <li>Carne</li>
  <li>Queso</li>
  <li>Lechuga</li>
  <li>Tomate</li>
  <li>Cebolla</li>
</ul>

        </Typography>
        <Button variant="contained">Agregar al carrito</Button>

      </CardContent>

    </Card>


  );
}