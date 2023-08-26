import { useState } from "react";
import{ useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title: title, body: body, author: author};

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("New blog created");
            setIsPending(false);
            // Redirect to home page
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea  
                    type="text" 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                </select>
                { !isPending && <button> Add Blog </button>}
                { isPending && <button disabled>  Adding blog...</button>}
                
                <h3>Preview</h3>
                <p> title: {title}</p>
                <p> body: {body}</p>
                <p> author: {author}</p>
            </form>
        </div>
    );
}

export default Create;