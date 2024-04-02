export default function SinglePost({item}) {
    return (
        <div className="item">
            <h2>{item.name}</h2>
            <p>{item.species}</p>
            <p>{item.status}</p>
            <img src={item.image} alt="" />
        </div>
    )
}