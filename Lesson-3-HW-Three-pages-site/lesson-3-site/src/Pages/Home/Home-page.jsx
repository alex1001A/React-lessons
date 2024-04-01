import { useState } from "react"; //Деструктуризація

import Card from '../../Components/Card/Card'

import './Home-page.scss'

export default function Home() {
    
    const [count, setPageCount] = useState(1);
    const maxPageCount = 42

    const nextPage = () => {
        setPageCount(prevPageCount => Math.min(prevPageCount + 1, maxPageCount));
    };

    const prevPage = () => {
        setPageCount(prevPageCount => Math.max(prevPageCount - 1, 1));
    };

    return (
        <section className="hero">
            <div className="button-wrap">
                <button onClick={nextPage} className='page-button page-button_next'></button>
                <button onClick={prevPage} className='page-button page-button_prev'></button>
            </div>
            <div className="container hero__container">
                <Card pageCount={count}/>
            </div>
        </section>
    )
}