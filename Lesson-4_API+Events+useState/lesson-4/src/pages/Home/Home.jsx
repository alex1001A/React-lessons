import useFetch from 'react-fetch-hook'
import { Link } from "react-router-dom";




export default function Home() {
    const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')


    const list = data?.results.map(item => (
        <Link key={item.id} to={'/page/' + item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
        </Link>
    ))
    return isLoading ? (
        <div>...Loading</div>
    ) : (
        <div className="container">
            {list}
        </div>
    )
}