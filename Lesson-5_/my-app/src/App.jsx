import useFetch from 'react-fetch-hook'
import { Route, Routes } from 'react-router-dom' //Бібліотеки

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

import './App.css';

export default function App() {
  return (
    <div className="wrapper">

      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


