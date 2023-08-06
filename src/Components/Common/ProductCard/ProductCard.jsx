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
    <Card
      sx={{
        marginTop: "10px",
        borderRadius: "1.2rem",
        width: "15rem",
        height: "22rem",
        outlineColor: "black",
        border: "2px solid #87CEEB",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: "120px" }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
      <Typography
  gutterBottom
  variant="h5"
  sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
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
            <img className="icon" src={item.icon} alt={item.title} />
          </Typography>

          <Typography>${item.price}</Typography>
        </Typography>

        <Typography>{item.slogan}</Typography>

        <Typography variant="body3" color="text.secondary"></Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Comprar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

 
export default ProductCard