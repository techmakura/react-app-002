import "./bookCard.css";

const BookCard = (props) => {
    const {_id, title, pages, price, language, cover_image, author} = props.data;
    
    return(
        <div className="book-card">
            <div className="book-card_avatar">
                <img src={`${process.env.API_URL || "http://localhost:8000"}/uploads/${cover_image}`} />
            </div>

            <div className="book-card_desc">
                <h2>{title}</h2>

                <div className="books-card-meta">
                    <span>Pages: </span>{pages}
                    <span>Price: </span>{price}
                    <span>language: </span>{language}
                    {author ? (<span>Author: {author.title}</span>) : ""}
                </div>
            </div>
        </div>
    );
}

export default BookCard;