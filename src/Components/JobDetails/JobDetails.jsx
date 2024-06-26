import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <Helmet>
        <title>Job Details : {id}</title>
      </Helmet>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border md:col-span-3">
          <h2>Job Description : {job.job_description} </h2>

        </div>
        <div className="border md:col-span-1">
            <h4>Job Details</h4>
          <button className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
