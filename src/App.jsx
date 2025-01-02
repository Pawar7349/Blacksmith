import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Product from './components/Product.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
const App =()=> {
  
  return (
   <div>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Services />
      <Contact />
      <Footer />
   </div>
  )
}

export default App
