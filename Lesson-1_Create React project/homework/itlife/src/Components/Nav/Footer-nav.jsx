import logo2 from '../../img/Logo-2.png'


export default function FooterNav() {
    return (
        <nav class="navigation footer__navigation">
            <ul class="navigation__list">
                <li>
                    <a>
                        <img class="navigation__logo" src={logo2} alt="Logo" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}