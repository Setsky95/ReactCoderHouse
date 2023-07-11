import './ProductCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ item }) => {
  return (
    <Card sx={{  marginTop: "10px",borderRadius:"1.8rem" }} >
      <CardMedia sx={{ height: 400 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: "flex", justifyContent: "center", text: "center" }}
        >
          {item.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Typography>
            <img class="icon" src={item.icon}></img>
          </Typography>

          <Typography>
            <p>${item.price}</p>
          </Typography>
        </Typography>

        <Typography>{item.slogan}</Typography>

        <Typography variant="body3" color="text.secondary"></Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small">Info</Button>
        </Link>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
};
 
export default ProductCard