import React from 'react'
import Components from './Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css'
import Cards from './Cards';
import Cards2 from './Cards2';
import Footer from './Footer';

const App = () => {
  return (
    <div style={{backgroundColor:'#e0e7ff'}}>
      < Components />
      <Cards />
      <Cards2 />
      <Footer/>
      
    </div>
  )
}

export default App
