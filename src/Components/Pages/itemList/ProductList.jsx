import ProductCard from "../../Common/ProductCard/ProductCard";

const ProductList = ({items}) => {
  console.log(items);
  return (
    <section style ={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap:"wrap", gap:"5px"}}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ProductList;

