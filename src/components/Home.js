import { useEffect, useState } from "react";
import BlogList from "./props/BlogList";
import useFetch from "./hooks/useFetch";

const Home = () => {

    const [name, setName] = useState("I");
    const [age, setAge] = useState(1);

    const handleClick = () => {
        setName("You");
        setAge(age + 1);
    }

    // Functions as props
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setblogs(newBlogs);
    // }


    // useEffect for age state
    // useEffect(() => {
    //     // Using setTimeout to simulate some time taken(1000ms) to get data
    //     console.log("Age change");

    // }, [age]);

    const {data, isPending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            <h1>Homepage</h1>

            <p>{name} have grown by {age} years. </p>
            <button onClick={handleClick}>Click to grow</button>

            {/* Error message */}
            {error && <div> {error} </div>}

            {/* Loading message while data is being fetched */}
            {isPending && <div> <em>Loading...</em> </div>}

            {/* blogs && to check if blogs are not null and then use the component with the props */}
            {data && <BlogList title="My blogs" blogs={data} />}
            {/* {blogs && <BlogList title="Mario's blogs" blogs={blogs.filter((blog) => blog.author === 'mario')} />}  */}

        </div>
    );
}

export default Home;