import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {

    const [books, setBooks] = useState({});
    const [error, setError] = useState("");

    let params = useParams();
    const _id = params.id;



    const fetchBooks = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book/${_id}`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY || "random",
                    "Content-Type": "Application/json"
                }
            })

            const result = await response.json();
            setBooks(result);
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <div className="book-page">
            <h1>{books.title}</h1>
        </div>
    )
}

export default BookDetails;