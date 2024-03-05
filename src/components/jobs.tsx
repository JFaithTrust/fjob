import { Jobs } from "@/types";
import { JobCard } from "./parts";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getAllJobs } from "@/api/fetchJobs";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllJobs().then((data) => setJobs(data));
  }, []);
  return (
    <div className="bg-lightblue">
      <div className="max-w-8xl mx-auto py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-5xl font-semibold">
          <span className="text-darkblue">Top</span> Jobs
        </h1>
        <div className="grid grid-cols-4 gap-3">
          {jobs.slice(0, 3).map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="px-5 py-3 font-roboto text-lg rounded-xl"
            onClick={() => navigate("/jobs")}
          >
            See More...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
