import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CreateBooks from "../components/createBooks";
import "./generic.css";

const BookDetails = () => {

    const [book, setBook] = useState({});
    const [error, setError] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    let params = useParams();
    const _id = params.id;



    const fetchBook = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book/${_id}`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY || "random",
                    "Content-Type": "Application/json"
                }
            })

            const result = await response.json();
            setBook(result);
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchBook();
    }, [])

    console.log("isEdit")

    return (
        <div className="book-page">
            <div className="header-wrapper">
                <h2>{book.title}</h2>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                    <Link to="/books">Back</Link>
                </div>
            </div>
            <div className="book-content">
                <img src={`http://localhost:8000/uploads/${book.cover_image}`} alt={book.title} />
                <div className="book-meta">
                    <div className="key">Price: </div>
                    <div className="value">{book.price}</div>
                </div>
                <div className="book-meta">
                    <div className="key">Pages: </div>
                    <div className="value">{book.pages}</div>
                </div>
                <div className="book-meta">
                    <div className="key">Language: </div>
                    <div className="value">{book.language}</div>
                </div>
                <div className="book-meta">
                    <div className="key">Author: </div>
                    <div className="value">{book.author?.name}</div>
                </div>
            </div>

            {isEdit ? (<CreateBooks
                isEdit={isEdit}
                title={book.title}
                _id={book._id}
                price={book.price}
                pages={book.pages}
                langauge={book.language}
                author={book.author}
                avatar={book.cover_image}
                onCancel={() => setIsEdit(false)} />) : ""}
        </div>
    )
}

export default BookDetails;