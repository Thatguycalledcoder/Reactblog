import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted successfully');
            history.push("/");
        });
    }

    return ( 
        <div className="blog-details">
            { isPending && <h2>Loading...</h2> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <p> Written by: { blog.author } </p>
                    <div>
                        { blog.body }
                    </div>
                    <button onClick={handleDelete}> Delete </button>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;