import { CiLocationOn,CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-6">
            <button className="text-[#7E90FE] font-extrabold border-2 border-[#7E90FE] rounded-md py-2 px-5">{remote_or_onsite}</button>
            <button className="text-[#7E90FE] font-extrabold border-2 border-[#7E90FE] rounded-md py-2 px-5">{job_type}</button>
        </div>
        <div className="flex gap-6">
            <h2 className="flex gap-2 justify-center items-center"><CiLocationOn />{location}</h2>
            <h2 className="flex gap-2 justify-center items-center"><CiDollar />{salary}</h2>
        </div>
        <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
