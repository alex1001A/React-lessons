import { Route, Routes } from 'react-router-dom' //Бібліотеки

// Pages
import Home from './Pages/Home/Home-page'
// import About from './Pages/AboutUs/About-us-page'
// import Contact from './Pages/Contact/Contact'
// import Error from './Pages/Error-page/Error-404-page'

// Components
import Header from './Components/Header/Header'

// Styles
import './App.scss';

export default function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className='main'>
      <Routes>          
         <Route path='/' element={<Home />}/>
        {/*<Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/error-404' element={<Error/>}/> */}
      </Routes>
      </main>

      
    </div>
  );
}


