import './ItemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props.greeting);
    return (
        <h1 className="greeting">{props.greeting}</h1>
    )
}

export default ItemListContainer