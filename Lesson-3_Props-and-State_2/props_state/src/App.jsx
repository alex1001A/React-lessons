import { Route, Routes } from 'react-router-dom' //Бібліотеки


import Home from './Pages/Homepage/Homepage'
import About from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


export default function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Routes>          
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </main>
      <Footer/>
    </>
  );
}


