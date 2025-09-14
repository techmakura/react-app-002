import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CreateBooks from "../components/createBooks";
import Modal from "../components/modal";
import "./generic.css";

const BookDetails = () => {
    const [book, setBook] = useState({});
    const [error, setError] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    let params = useParams();
    const _id = params.id;

    const navigate = useNavigate();

    const fetchBook = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book/${_id}`, {
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

    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/book/${_id}`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY || "random",
                    "Content-Type": "Application/json"
                },
                "method": "DELETE"
            })

            await response.json();
            toast('Successfully Deleted the book', {
                onClose: () => {
                    navigate(`/books`);
                },
            });
        } catch (err) {
            setError(err)
        }
    }

    const handleDeletePop = () => {
        setOpenModal(true);
    }

    useEffect(() => {
        fetchBook();
    }, [])

    return (
        <div className="book-page">
            <ToastContainer />
            <div className="header-wrapper">
                <h2>{book.title}</h2>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                    <button onClick={handleDeletePop}>Delete</button>
                    <Link to="/books">Back</Link>
                </div>
            </div>
            <div className="book-content">
                <img src={`${process.env.REACT_APP_API_URL}/uploads/${book.cover_image}`} alt={book.title} />
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
                author={book.author?._id}
                avatar={book.cover_image}
                onCancel={() => setIsEdit(false)} />) : ""}
            
            {openModal && <Modal title="Delete!" body="Are you sure want to delete ?" close="Cancel" save="Delete" onSave={handleDelete} onCancel={()=>setOpenModal(false)} />}
        </div>
    )
}

export default BookDetails;