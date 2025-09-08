
import './App.css'
import AboutUs from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import UpperSection from './components/UpperSection'

function App() {
  

  return (
    <>
      <Navbar/>
      <UpperSection/>
      <Products/>
      <Blog/>
      <Faq/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
