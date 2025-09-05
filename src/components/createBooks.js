import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import InputField from "./inputField";
import SelectField from "./selectField";
import { Link } from "react-router-dom";

const CreateBooks = (props) => {
    const { isEdit, title, _id, price, pages, langauge, author, avatar, onCancel } = props;

    const langaugeOptions = [{ _id: 'eng', name: 'eng' }, { _id: 'nep', name: 'nep' }];

    const [book, setBook] = useState({ title: "", pages: 0, price: 0, avatar: "", language: "", author: "" });
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleChange = (event) => {
        if (event.target.type === "file") {
            setBook({ ...book, [event.target.name]: event.target.files[0] });
        } else {
            setBook({ ...book, [event.target.name]: event.target.value });
        }
    }

    const fetchAuthor = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/author`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY || "random",
                    "Content-Type": "Application/json"
                }
            })

            const result = await response.json();
            setAuthors(result);
        } catch (err) {
            setError(err)
        }
    }

    const postBook = async () => {
        try {
            const formData = new FormData();


            if (isEdit) {
                formData.append("title", book.title ? book.title : title);
                formData.append("author", book.author ? book.author : author?._id);
                formData.append("langauge", book.language ? book.language : langauge);
                formData.append("price", book.price ? book.price : price);
                formData.append("pages", book.pages ? book.pages : pages);
                formData.append("image", book.avatar ? book.avatar : avatar);

                const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book/${_id}`, {
                    "headers": {
                        "token": process.env.REACT_APP_API_KEY || "random"
                    },
                    "method": "PUT",
                    "body": formData
                })
                if (response.status == "200") {
                    toast('Successfully updated the book', {
                        onClose: () => {
                            navigate(`/books/${_id}`);
                        },
                    });
                }
            } else {
                formData.append("title", book.title);
                formData.append("author", book.author);
                formData.append("langauge", book.language);
                formData.append("price", book.price);
                formData.append("pages", book.pages);
                formData.append("image", book.avatar);
                const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book`, {
                    "headers": {
                        "token": process.env.REACT_APP_API_KEY || "random"
                    },
                    "method": "POST",
                    "body": formData
                })
                if (response.status == "201") {
                    toast('Successfully created the book', {
                        onClose: () => {
                            navigate("/books");
                        },
                    });
                }
            }
        } catch (err) {
            console.log(err + " errror");
            setError(err)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        postBook();
    }

    useEffect(() => {
        fetchAuthor();
    }, [])

    console.log("isEdit ", isEdit);

    console.log(isEdit ? "value: " + price : "")
    return (
        <>
            <form>
                <InputField type="text" placeholder="Enter the title of book" name="title" onChange={handleChange} label="Book Title:" defaultValue={isEdit ? title : ""} />
                <InputField type="number" placeholder="Pages count" name="pages" onChange={handleChange} label="pages:" defaultValue={isEdit ? pages : ""} />
                <InputField type="number" placeholder="Price" name="price" onChange={handleChange} label="price:" defaultValue={isEdit ? price : ""} />
                <SelectField name="language" options={langaugeOptions} onChange={handleChange} label="Language" defaultValue={isEdit ? langauge : ""} />
                <img src={`http://localhost:8000/uploads/${avatar}`} alt={title} />
                <InputField type="file" onChange={handleChange} name="avatar" />
                <SelectField name="author" onChange={handleChange} options={authors} label="Author" />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button onClick={handleFormSubmit}>Submit</button>
                    {isEdit ? <button onClick={onCancel}>Cancel</button> : ""}
                </div>
                <ToastContainer />
            </form>
        </>
    )
}

export default CreateBooks;