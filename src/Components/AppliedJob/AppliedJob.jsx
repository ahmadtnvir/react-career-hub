import { Link } from "react-router-dom";


const AppliedJob = () => {
    return (
        <div>
            <h2>This is applied Job</h2>
            <Link to={'/'}><button>Go Back To Home</button></Link>
        </div>
    );
};

export default AppliedJob;