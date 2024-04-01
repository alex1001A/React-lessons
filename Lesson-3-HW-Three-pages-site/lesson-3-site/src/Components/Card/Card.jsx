import useFetch from 'react-fetch-hook'

import './Card.scss'

export default function Card({pageCount}) {

    const apiLink = `https://rickandmortyapi.com/api/character?page=${pageCount}`

    const { data } = useFetch(apiLink)

    const list = data?.results.map(item => (

        <div className="card" key={item.id}>
            <h2 className='card__title'>{item.name}</h2>
            <img className='card__img' src={item.image} alt={item.name} />
            <div className="card__info">
                <h3 className='card__info_gender'>{item.gender}</h3>
                <h3 className='card__info_species'>{item.species}</h3>
            </div>
        </div>

    ))

    return (
        <>
        
            {list}
        </>
    )
}