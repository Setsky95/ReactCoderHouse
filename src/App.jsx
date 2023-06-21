import { Box } from '@mui/material'
import './App.css'
import ProductList from './Components/Common/ProductList'
import Footer from './Components/Layouts/Footer'
import NavBar from './Components/Layouts/NavBar/NavBar'
import HomeCarrusel from './Components/Common/HomeCarrusel'


function App() {

  return (
    <>
      <div>
<NavBar/>
<HomeCarrusel/>

<Box sx={{ display: 'flex', justifyContent: 'space-evenly' , gap: '10px'   }}>
<ProductList/>
<ProductList/>
<ProductList/>
<ProductList/>
</Box>
<Footer/>
     </div>
     
    </>
  )
}

export default App
