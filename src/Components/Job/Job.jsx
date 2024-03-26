const Job = ({ job }) => {
  const {
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
        <div className="flex">
            <p>{location}</p>
            <p>{salary}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
