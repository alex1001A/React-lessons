import { Link } from "react-router-dom"

import './Header.scss'

import Logo from '../../img/header/Alex_PNG.png'
import Cart from '../../img/header/shopping-cart-icon.jpg'


export default function Header() {
    return (
        <header className='header'>
            <div className="container header__container">
                <Link to='/'>
                    <img className="header__logo" src={Logo} alt="logo" />
                </Link>
                <nav>
                    <ul className="header__list">
                        <li className="header__list_link">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="header__list_link">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="header__list_link">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <input className="header__search" type="text" placeholder="Type character" />
                <div className="cart">
                    <img className="cart__img" src={Cart} alt="" />
                    <span className="cart__count">2</span>
                </div>
            </div>
        </header>
    )
}

