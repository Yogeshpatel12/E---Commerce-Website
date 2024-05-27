//  ES 6 importing 
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import ProductPage from './components/ProductPage'



function App() {
  return (
    <>
    {/* Header and Navbar */}
    <Header/>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/product/:id" element={<ProductPage/>}></Route>
    </Routes>


    {/* Footer in last */}
    <Footer/>
    </>
  )
}

export default App