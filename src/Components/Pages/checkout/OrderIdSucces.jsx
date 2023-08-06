import CheckOutContainer from "./CheckOutContainer"

const OrderIdSucces = ({orderId}) => {
  return (
    <div style={{marginTop:"150px", marginBottom:"400px"}}>
    <h1 className="webFont"style={{ textAlign: 'center', fontSize:"2em" }}>¡Gracias! </h1>
      <h3 className="webFont"style={{ textAlign: 'center' }}>Tu número de orden es {orderId} </h3>
      <h4 className="webFont"style={{ textAlign: 'center' }}> Recordá que con él podrás consultarnos lo que necesites</h4>
    </div>

  );
}

export default OrderIdSucces