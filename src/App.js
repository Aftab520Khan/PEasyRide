import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'



export const App = () => {
  return(
    <div>
      
     <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
     </Router>
     
    </div>
  )
}
export default App;
