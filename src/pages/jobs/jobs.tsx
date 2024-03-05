import { getAllJobs } from "@/api/fetchJobs";
import { JobCard, Partners } from "@/components/parts";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Jobs } from "@/types";
import { useState, useEffect } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 1;
  // const lastUsersIndex = currentPage * usersPerPage;
  // const firstUserIndex = lastUsersIndex - usersPerPage;
  // const currentUsers = jobs.slice(firstUserIndex, lastUsersIndex);

  // const highlightSearchTerm = (text: string, term: string) => {
  //   const regex = new RegExp(`(${term})`, "gi");
  //   return text.split(regex).map((part, index) => (
  //     <span
  //       key={index}
  //       className={
  //         part.toLowerCase() === term.toLowerCase() ? "bg-typeyellow" : ""
  //       }
  //     >
  //       {part}
  //     </span>
  //   ));
  // };

  useEffect(() => {
    getAllJobs().then((data) => setJobs(data));
  }, []);

  // useEffect(() => {
  //   getAllJobsByQueryParams(currentPage).then((data) => setJobs(data));
  // }, [currentPage])
  
  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Jobs</h1>
          <div className="flex items-center py-4 justify-between">
            <div className="flex flex-row justify-center items-center gap-x-6">
              
            </div>
            <Input
              placeholder="Enter name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-3 w-full">
              {jobs
                ?.filter((user) =>
                  user.title
                    ?.toLowerCase()
                    // .includes(searchTerm.toLowerCase())
                    .replace(/\s+/g, "")
                    .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
                )
                .map((job) => (
                  <JobCard job={job} key={job.id} />
                ))}
            </div>
            <div className="flex items-center py-4 justify-end">
              {jobs.length > usersPerPage && (
                <CustomPagination
                  totalPosts={jobs.length}
                  postsPerPage={usersPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Jobs;
