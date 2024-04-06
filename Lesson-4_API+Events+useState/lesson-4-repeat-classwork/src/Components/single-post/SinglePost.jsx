import { Link } from 'react-router-dom'

export default function SinglePost({item}) {
    return(
        <div className="item">
            <Link to='/'>Back</Link>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>{item.created}</p>
            <p>{item.speciesd}</p>
            <p>{item.status}</p>
        </div>
    )
}