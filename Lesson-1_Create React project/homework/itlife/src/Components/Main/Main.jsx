import Card from "../Card/Card"

export default function Main() {
    return (
        <main className="main">
            <section className="hero">
                <div className="container hero__container">
                    <h5 class="suptitle">OUR SERVICES</h5>
                    <h1 class="title hero__title">We build experience</h1>
                    <div class="hero__block">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
        </main>
    )
}