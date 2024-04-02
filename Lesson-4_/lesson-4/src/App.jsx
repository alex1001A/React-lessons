import useFetch from 'react-fetch-hook'
import { Route, Routes } from 'react-router-dom' //Бібліотеки

import Home from './pages/Home/Home'
import SinglePost from './pages/Components/single-post'



export default function App() {

  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')

  console.log(data?.results);

  return (
    <>
      <h2>Header</h2>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/sasha1' element={<SinglePost />} /> */}
          {data?.results.map(item => 
          <Route key={item.id} path={`/page/${item.name}`} element={<SinglePost item={item}/>}/>
          )}

        </Routes>
      </main>
      {/* <SinglePost item={data?.results[0]}/> */}
      <h2>Footer</h2>
    </>
    
  )
}

