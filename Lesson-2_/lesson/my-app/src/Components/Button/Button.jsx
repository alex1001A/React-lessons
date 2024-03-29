// Props(properties)
import './Button.css'

export default function Button({item, className}) {
    return(
        <button className={className || ''}>{item || 'Start Trading'}</button>
    )
}

