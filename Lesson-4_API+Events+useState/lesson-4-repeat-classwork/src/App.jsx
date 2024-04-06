import { Route, Routes } from 'react-router-dom'
import useFetch from "react-fetch-hook";

import Home from './Pages/Home/Home'


import './App.css';
import SinglePost from './Components/single-post/SinglePost';


export default function App() {

  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')

  console.log(data?.results);

  return (
    <>
      <h1>Header</h1>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {data?.results.map(item => <Route path={`/page/${item.name}`} element={<SinglePost item={item}/>} />)}
          <Route path='*' element={<h2>404</h2>} />
        </Routes>
      </main>
      {/* <Home/> */}
      <h2>Footer</h2>
    </>
  )
}


