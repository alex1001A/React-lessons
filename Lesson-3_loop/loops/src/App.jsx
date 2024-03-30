// import {testUsers} from './data/Users'
import Card from './Components/Card'
import './main.css'

const testUsers = [
  { id: 1, name: "Пользователь 1", age: 17, email: "user1@example.com" },
  { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
  { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
  { id: 5, name: "Пользователь 5", age: 29, email: "user5@example.com" }, 
  { id: 6, name: "Пользователь 5", age: 15, email: "user5@example.com" }, 
  { id: 7, name: "Пользователь 5", age: 78, email: "user5@example.com" }, 
  { id: 8, name: "Пользователь 5", age: 11, email: "user5@example.com" }, 
  { id: 9, name: "Пользователь 5", age: 45, email: "user5@example.com" }, 
];

// export default function App() {


//   return (
//     <>


//      {testUsers.map(item => (
//       <Card key={item.id} user={item} />
//      ))}

//     </>
//   );
// }

export default function App() {

  const users = testUsers.map(item => item.age <= 18 ? <Card key={item.id} user={item}/> : <Card key={item.id} user={item}/>)

  return (
    <>
      <h2>Users</h2>
      <div className="card-wrap">
        {users}

      </div>
    </>
  );
}

