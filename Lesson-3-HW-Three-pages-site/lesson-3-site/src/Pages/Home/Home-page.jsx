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
                <div onClick={prevPage} className='page-button page-button_prev'></div>
                <div onClick={nextPage} className='page-button page-button_next'></div>
            </div>
            <div className="container hero__container">
                <Card pageCount={count}/>
            </div>
        </section>
    )
}

