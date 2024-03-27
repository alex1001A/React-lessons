import logo1 from '../../img/Logo.png'


export default function Nav() {
    return (
        <nav class="navigation">
            <ul class="navigation__list">
                <li>
                    <a>
                        <img class="navigation__logo" src={logo1} alt="Logo" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}