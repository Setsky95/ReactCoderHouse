import './App.css'
import Footer from './Components/Layouts/Footer'
import HomeCarrusel from './Components/Common/HomeCarrusel'
import ProductList from './Components/Pages/itemList/ProductList'
import ProductListContainer from './Components/Pages/itemList/ProductListContainer'
import ItemDetail from './Components/Pages/itemDetail/ItemDetail'
import ItemDetailContainer from './Components/Pages/itemDetail/ItemDetailContainer'
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import CartContainer from './Components/Pages/Cart/CartContainer'
import CheckOutContainer from './Components/Pages/checkout/CheckOutContainer'
import NavBar from './Components/Layouts/Navbar/NavBar'
import CartContextComponent from './context/CartContext'


function App() {
  return (
    <BrowserRouter>
    <CartContextComponent>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/cheackout" element={<CheckOutContainer />} />
            <Route path="/category/:categoryName"element={<ProductListContainer />}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            </Route>

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
