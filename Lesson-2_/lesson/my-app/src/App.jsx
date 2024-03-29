import Button from './Components/Button/Button'
import Card from './Components/Сard/Card'

export default function App() {

  let shopItem = {
    img: 'https://fonts.google.com/',
    title: 'fvswvsd',
    description: 'dadvq',
  }

  return (
    <>
      <h1>Test</h1>
      <Button className={'button'} item={'Sasha'}/>
      <Button className={'button--red'}/>

    <Card item={shopItem}/>
    </>
  );
}


