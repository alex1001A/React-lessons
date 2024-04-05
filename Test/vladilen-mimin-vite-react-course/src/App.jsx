import Header from './components/Header/Header'
import WayToTeach from './components/WayToTeach/WayToTeach'
import Button from './components/Button/Button'

import { data } from './data'

import './App.css'

export default function App() {

  function handleClick() {
    console.log('button clicked');
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>React+Vite</h1>
          <ul>
            
            <WayToTeach {... data[0]} />
            <WayToTeach {... data[1]} />
            <WayToTeach {... data[2]} />
          </ul>
        </section>
        <section>
          <h3>How are you?</h3>
          <Button click={handleClick}>Подход</Button>
          <Button click={handleClick}>Доступность</Button>
          <Button click={handleClick}>Концетрация</Button>
        </section>
      </main>
    </div>
  )
}


