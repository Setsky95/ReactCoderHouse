import './App.css'
import Footer from './Components/Layouts/Footer'
import NavBar from './Components/Layouts/NavBar/NavBar'
import HomeCarrusel from './Components/Common/HomeCarrusel'
import ProductList from './Components/Pages/itemList/ProductList'
import ProductListContainer from './Components/Pages/itemList/ProductListContainer'


function App() {

  return (
    <>
      <div>
<NavBar/>
<HomeCarrusel/>
<ProductListContainer/>
<Footer/>
     </div>
     
    </>
  )
}

export default App
