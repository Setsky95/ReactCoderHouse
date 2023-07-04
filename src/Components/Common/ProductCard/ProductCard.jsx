import './ProductCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: "345", marginTop:"10px" }}>
      <CardMedia sx={{ height: 400 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}           {item.rated}
          <StarRateRoundedIcon sx={{ color: "yellow" }} />
        </Typography>
        <Typography  sx= {{display: "flex", justifyContent: "space-evenly",  }}>
          {item.slogan}
        </Typography>
   
        <Typography variant="body3" color="text.secondary" >
          <p>Plato insignia: {item.essential}</p>
          <p>Categoría: {item.category}</p>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Info</Button>
        <Button size="small">Resevar</Button>
      </CardActions>
    </Card>
  );
};
 
export default ProductCard