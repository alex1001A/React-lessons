import useFetch from 'react-fetch-hook'
import { Link } from "react-router-dom";

export default function Home() {
    const { data } = useFetch('https://rickandmortyapi.com/api/character')


    const list = data?.results.map(item => (
        <Link key={item.id} to={'/page/' + item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
        </Link>
    ))
    return (

        <div className="container">
            {list}
        </div>
    )
}