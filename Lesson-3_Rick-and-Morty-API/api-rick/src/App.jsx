import useFetch from 'react-fetch-hook'

import './App.css'

export default function App() {

  const { data } = useFetch('https://rickandmortyapi.com/api/character')

  console.log(data?.results);

  const list = data?.results.map(item => (
    <div className="person">
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
    </div>
  ))

  return (
      <div className="App">
        {list}
      </div>
    )
}


