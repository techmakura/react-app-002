import { useEffect, useState } from "react";
import CreateBooks from "../components/createBooks";
import BookCard from "../components/bookCard";
import "./books.css";
import "./generic.css";
import { Link } from "react-router-dom";

const Books = () => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");


    const fetchBooks = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book`, {
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

    console.log("books " + books);

    return (
        <div className="page">
            <div className="header-wrapper">
                <h2>List of books</h2>
                <Link to="/create-book">
                    Create Book
                </Link>
            </div>

            <div className="book-list">
                {books.length > 0 ? (
                    books.map((value, index) => (
                        <BookCard key={index} data={value} />
                    ))
                ) : "Books not found"}
            </div>

        </div>
    )
}

export default Books;