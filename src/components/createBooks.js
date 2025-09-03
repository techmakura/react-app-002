import { useState, useEffect } from "react";
import InputField from "./inputField";
import SelectField from "./selectField";

const CreateBooks = () => {
    const langaugeOptions = [{ _id: 'eng', name: 'eng' }, { _id: 'nep', name: 'nep' }];

    const [book, setBook] = useState({ title: "", pages: 0, price: 0, avatar: "", language: "", author: "" });
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState("")

    const handleChange = (event) => {
        console.log(event.target.value  + " event.target.value ");
        console.log(event.target.type + " Even target type")
        console.log(event.target.name + " Even target name")
        console.log(event.target + " Even target ")
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

            console.log(result + " result");
            setAuthor(result);
        } catch (err) {
            setError(err)
        }
    }

    const postBook = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:8000"}/book`, {
                "headers": {
                    "token": process.env.REACT_APP_API_KEY || "random",
                    "Content-Type": "Application/json"
                },
                "method": "POST",
                "body": JSON.stringify(book)
            })
            debugger
            const result = await response.json();

            console.log(result + " result");
            setAuthor(result);
        } catch (err) {
            console.log(err + " errror");
            setError(err)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(book + " book")
        debugger
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
                <SelectField name="language" options={langaugeOptions} label="Language" />
                <InputField type="file" onChange={handleChange} name="avatar"  />
                <SelectField name="author" onChange={handleChange} options={author} label="Author" />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </>
    )
}

export default CreateBooks;