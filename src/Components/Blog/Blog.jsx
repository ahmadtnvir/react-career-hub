import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <h2>This is blog</h2>
            <Link to={'/'}><button>Go Back To Home</button></Link>
        </div>
    );
};

export default Blog;