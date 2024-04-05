import './Button.css'

export default function Button({ children, click }) {

    return (
        <button
            className='button'
            onClick={click}>
            {children}
        </button >
    )
}