import './App.css'
import Footer from './Components/Layouts/Footer'
import NavBar from './Components/Layouts/NavBar/NavBar'
import HomeCarrusel from './Components/Common/HomeCarrusel'
import ProductList from './Components/Pages/itemList/ProductList'
import ProductListContainer from './Components/Pages/itemList/ProductListContainer'
import ItemDetail from './Components/Pages/itemDetail/ItemDetail'
import ItemDetailContainer from './Components/Pages/itemDetail/ItemDetailContainer'

import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Cart from './Components/Pages/Cart/Cart'


function App() {

  return (
<BrowserRouter>
<Routes>
  <Route element={<NavBar/>}>
  <Route path="/" element={<ProductListContainer />} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/itemDetail/:id" element ={<ItemDetailContainer/>} />
  </Route>
  <Route path="*" element={<h1>NOT FOUND</h1>} />
</Routes>
</BrowserRouter>
  );
}

export default App
