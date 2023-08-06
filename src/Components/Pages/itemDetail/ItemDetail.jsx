import CounterContainer from "../../Common/Counter/CounterContainer";
import ProductCardDetailContainer from "../../Common/ProductCardDetail/ProductCardDetailContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';



const ItemDetail = ({
  product,
  agregarAlCarrito,
  QuantityOnCart,
  cantidadEnCarrito,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        raw: "raw",
      }}
    >
      <Box>
        <img
          src={product.img}
          style={{ height: "20rem", borderRadius: "2rem", margin: "1rem" }}
        />
      </Box>
      <Box
        style={{ display: "flex", alingcontent: "center", marginTop: "5rem" }}
      >
        <Typography variant="h6" style={{ width: "35vh" }}>
          {product.description}
          <Box style={{ marginTop: "5rem" }}>
            <Typography variant="h6" className="webFont">
              ${product.price}{" "}
            </Typography>
            <CounterContainer
              stock={product.stock}
              agregarAlCarrito={agregarAlCarrito}
              cantidadEnCarrito={cantidadEnCarrito}

            />{" "}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
 

export default ItemDetail;
