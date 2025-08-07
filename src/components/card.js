import "./card.css";
const Card = () => {
    return(
        <div className="card">
            <h2 className="card-title">Card Title</h2>
            <img className="card-image" height="150" width="200px" src="https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" />
            <p className="card-content">This is a simple card component.</p>
            <button className="card-button">Click Me</button>
        </div>
    )
}

export default Card;