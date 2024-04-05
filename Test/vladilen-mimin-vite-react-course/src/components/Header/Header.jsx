import './Header.css'
import logo from '/vite.svg'


export default function Header() {
    const now = new Date()

    return (
        <header>
            {/* <h3>H3</h3> */}
            <img src={logo} alt="" />
            <span>Time: { now.toLocaleTimeString() }</span>
        </header>
    )
}