import CounterContainer from "../../Common/Counter/CounterContainer";
import ProductCardDetailContainer from "../../Common/ProductCardDetail/ProductCardDetailContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';



const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        raw:"raw"
      }}
    >
      <Box>
        <img
          src={product.img}
          style={{ height: "20rem", borderRadius: "22rem", margin: "1rem" }}
        />
      </Box>
      <Box style={{ display: "flex", alingcontent: "center", marginTop: "5rem" }}>
        
        <Typography style={{ width: "15vh", }}>
          <h2>{product.description}</h2>
          <Box style={{ marginTop: "5rem" }} >

          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
          />      </Box>

        </Typography>
      </Box>
    </Box>
  );
};
 

export default ItemDetail;
