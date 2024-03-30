import { testUsers } from './data/Users'

export const testUsers2 = [
  { id: 1, name: "Пользователь 1", age: 16, email: "user1@example.com" },
  { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
  { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
  { id: 5, name: "Пользователь 5", age: 17, email: "user5@example.com" }
];

export default function App() {

  const users3 = testUsers2.map(item => (
    item.age >= 18 && <h1 key={item.id}>Ви повнолітній: {item.name}</h1> 
  ))

  // Умова && {Результат}

  // Умова ? {Результат якщо true} : {Результат якщо false}

  return (
    <>
      {

        // testUsers2.map(item => {
        //   return <div>{item.name}</div>
        // }) Old variant

        // testUsers2.map((item, index) => (
        //   <h2 key={index}>{item.name}</h2>
        // )) New variant (with unique key for everyone) 
        // якщо в массиві є id то краще передавати саме його

        

        <div>
          {users3}
        </div>


      }
    </>
  );
}

