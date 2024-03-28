// Props(properties)
import './Button.css'

export default function Button({item, className}) {
    return(
        <button className={`button ${className || ''}`}>{item || 'Start Trading'}</button>
    )
}

