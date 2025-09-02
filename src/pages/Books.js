import { useEffect, useState } from "react";
import CreateBooks from "../components/createBooks";
import BookCard from "../components/bookCard";
import "./books.css";

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
        <>
            <h2>List of books</h2>
            <div className="book-list">
                {books.length > 0 ? (
                    books.map((value, index) => (
                        <BookCard key={index} data={value} />
                    ))
                ) : "Books not found"}
            </div>
            <h2>Create books</h2>
            <CreateBooks />
        </>
    )
}

export default Books;