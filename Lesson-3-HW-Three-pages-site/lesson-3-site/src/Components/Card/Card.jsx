import useFetch from 'react-fetch-hook'


import './Card.scss'

export default function Card() {

    const { data } = useFetch('https://rickandmortyapi.com/api/character')

    console.log(data?.results);
    console.log(data);

    const list = data?.results.map(item => (

        <div className="card">
            <h2 className='card__title'>{item.name}</h2>
            <img className='card__img' src={item.image} alt="" />
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