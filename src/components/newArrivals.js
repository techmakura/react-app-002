import { useState, useEffect } from "react";
import NewArrivalItem from "./newArrivalItem";

const NewArrivals = () => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    const fetchBooks = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY,
                    "Content-Type": "Application/json"
                }
            })

            const result = await response.json();
            setBooks(result.slice(0, 5));
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    console.log(books);

    return (
        <section className="new-arrival container">
            <div className="section-title">
                <h2>New arrivals</h2>
                <a href="#">View All</a>
            </div>

            <div className="new-arrival-list">
                {books.map((value, index) => (
                    <NewArrivalItem image_link={value.cover_image} title={value.title} price_range={value.price} key={index} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals;