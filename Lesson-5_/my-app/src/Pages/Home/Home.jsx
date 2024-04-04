import { HomeAPI } from '../../data/home-page'



export function Card({ item }) {
    return (
        <div className="instructions__row">
            {HomeAPI.instructions.cards.map(item => (
                <div className="instructions__card">
                    <div className="instructions__icons">
                        <h5 className="instructions__title">{item.title}</h5>
                        <img src={"/images/instructions/" + item.icon} alt="" />
                    </div>
                    <p className="instructions__text">
                        {item.desription}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default function Home() {

    console.log(HomeAPI);

    return (
        <>
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__item">

                    </div>
                    <div className="hero__content">
                        <h1 className="h1 hero__title">
                            {HomeAPI.title}
                        </h1>
                        <p className='p1 hero__text'>
                            {HomeAPI.desription}
                        </p>

                        <div className="hero__owner">
                            <img src={"/images/" + HomeAPI.owner.img} alt="" />
                            <div className="hero__col">
                                <h5 className='hero__name'>
                                    {HomeAPI.owner.name}
                                </h5>
                                <p className='hero__position'>
                                    {HomeAPI.owner.position}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* home-list */}
            {/* nav */}

            <section className="instructions">
                <div className="container instructions__container">
                    <header className='instructions__header'>
                        {HomeAPI.instructions.title}

                    </header>
                    <Card/>
                </div>
            </section>
        </>
    )
}