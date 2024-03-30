import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statics</title>
            </Helmet>
            <h2>This is statistics </h2>
            <Link to={'/'}><button>Go Back To Home</button></Link>
        </div>
    );
};

export default Statistics;