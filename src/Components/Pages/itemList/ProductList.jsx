import ProductCard from "../../Common/ProductCard/ProductCard";
import { Box } from '@mui/material';

const ProductList = ({items}) => {
  return (
    <Box sx={{
     backgroundColor: "primary.light",
     paddingBottom: "100px",
     paddingTop: "100px",
     paddingRight:"20px",
     paddingLeft:"20px",


    }}>
    <section style ={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap:"wrap", gap:"5px"}}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
    </Box>
  );
};

export default ProductList;

