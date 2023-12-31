import { Button } from "@mui/material"

const Counter = ({ counter, setCounter, agregarAlCarrito, stock, }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ display: "flex" }}>
          <Button
            size="small"
            sx={{ height: 20 }}
            disabled={counter <= 1}
            variant="contained"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </Button>
          <p>{counter}</p>
          <Button
            size="small"
            sx={{ height: 20 }}
            disabled={counter >= stock}
            variant="contained"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </Button>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            size="small"
            variant="contained"
            color="inherit"
        sx={{ height: 25 }}
            onClick={() => agregarAlCarrito(counter)}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter