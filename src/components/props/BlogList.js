import { Link } from 'react-router-dom';

// First use of props (proerties)
const BlogList = ({title, blogs, handleDelete}) => { //can use props as parameter adn call props.attribute on the attributes passed == but to ensure only the given paoperties are used we create a {}
    return (
        <div className="blog=list">     
            <h2>{ title }</h2>
            {blogs.map((blog) => { 
                return (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: <strong>{ blog.author }</strong></p>
                        <p> {blog.body} </p>
                    </Link>
                    
                </div>
                )
            })}
        </div>
    )
}
 
export default BlogList; 