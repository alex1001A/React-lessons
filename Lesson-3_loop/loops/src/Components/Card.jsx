import './Card.css'

export default function Card({ user }) { // тут мы называем props как захотим для удобства обращения к массиву

    // return user.age <= 18 ? (

    //     <div className="card">
    //         <h1>Your name: {user.name}</h1>
    //         <h2>Your age: {user.age}</h2>
    //         <a href={"mailto:" + user.email}>Email: {user.email}</a>
    //     </div>
    // )
    //     : (
    //         <div className="card card--green">
    //             <h1>Your name: {user.name}</h1>
    //             <h2>Your age: {user.age}</h2>
    //             <a href={"mailto:" + user.email}>Email: {user.email}</a>
    //         </div>
    //     )

    function AddFavourite(item) {
        console.log(item);
    }

    return (
        <div className={`card ${user.age >= 18 && 'card--green'}`}>
            <h1>Your name: {user.name}</h1>
            <h2>Your age: {user.age}</h2>
            <a href={"mailto:" + user.email}>Email: {user.email}</a><br />
            {user.age <= 18 && <button onClick={() => AddFavourite(user)}>Add</button>}
            
        </div>
    )
}
