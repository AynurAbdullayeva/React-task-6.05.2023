import { useState } from 'react'
import About from './Components/About/About'
import Product from './Components/Products/Product'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <About/>
       <Contact/>
       <Product/>
       <Footer/>

    </>
  )
}

export default App
