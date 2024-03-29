import Button from '../Button/Button'
import './Card.css'


export default function Card({item}) {
    return(
        <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button className={'button'}/>
        </div>
    )
}