import Button from '../Button/Button'
import './Card.css'


export default function Card({item}) {
    return(
        // <button className={`button ${className || ''}`}>{item || 'Start Trading'}</button>
        <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button/>
        </div>
    )
}