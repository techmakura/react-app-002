import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import InputField from "./inputField";
import SelectField from "./selectField";
import { Link } from "react-router-dom";

const CreateBooks = () => {
    const langaugeOptions = [{ _id: 'eng', name: 'eng' }, { _id: 'nep', name: 'nep' }];

    const [book, setBook] = useState({ title: "", pages: 0, price: 0, avatar: "", language: "", author: "" });
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log(event.target.name + " name")
        console.log(event.target.value + " value")
        if (event.target.type === "file") {
            console.log(event.target.files[0]);
            setBook({ ...book, [event.target.name]: event.target.files[0] });
        } else {
            setBook({ ...book, [event.target.name]: event.target.value });
        }
        console.log(book.title , " title", book.author,  " author", book.language,  " language", book.price,  " price", book.avatar , " avatar", book.pages + " pages");
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

            console.log(result + " result");
            setAuthor(result);
        } catch (err) {
            setError(err)
        }
    }

    const postBook = async () => {
        console.log(book.title , " title", book.author,  " author", book.language,  " language", book.price,  " price", book.avatar , " avatar", book.pages + " pages");
        try {
            const formData = new FormData();
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
            const result = await response.json();
            console.log(response.status);
            if(response.status == "201"){
                toast('Successfully created the book', {
                    onClose: () => {
                        navigate("/books");
                    },
                  });
            }
            console.log(result + " result");
        } catch (err) {
            console.log(err + " errror");
            setError(err)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(book + " book")
        postBook();
    }

    useEffect(() => {
        fetchAuthor();
    }, [])


    return (
        <>
            <form>
                <InputField type="text" placeholder="Enter the title of book" name="title" onChange={handleChange} label="Book Title:" />
                <InputField type="number" placeholder="Pages count" name="pages" onChange={handleChange} label="pages:" />
                <InputField type="number" placeholder="Price" name="price" onChange={handleChange} label="price:" />
                <SelectField name="language" options={langaugeOptions} onChange={handleChange} label="Language" />
                <InputField type="file" onChange={handleChange} name="avatar"  />
                <SelectField name="author" onChange={handleChange} options={author} label="Author" />
                <button onClick={handleFormSubmit}>Submit</button>
                <ToastContainer />
            </form>
        </>
    )
}

export default CreateBooks;