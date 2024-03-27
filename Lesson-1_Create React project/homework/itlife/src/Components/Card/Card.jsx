import icon_1 from '../../img/icon-1.png'

export default function Card() {
    return (

        <div class="hero__item">
            <img class="item-icon" src={icon_1} alt="Ecommerce-icon" />
            <h3 class="item-title">Design</h3>
            <p class="item-text">
                Lorem ipsum dolor sit amet, coectetur adipiscing elit.
                Suspendisse varius enim in eros .
            </p>
            <a class="learn-more item__link" href="#">Learn more</a>
        </div>

    )
}