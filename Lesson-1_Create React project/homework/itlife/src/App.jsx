import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

import img from './img/img.jpeg'


import './App.css'

export default function App() {
  return (
    <>
    <Header/>
    <img src="./img/img.jpeg" alt="" /> // добавление напрямую через public
    <img src={img} alt="" /> // добавление через импорт и переменную
    <Main/>
    <Footer/>
    </>
    );
}

