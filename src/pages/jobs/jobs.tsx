// import { getDistrictByRegionId } from "@/api/fetchDistrict";
// import { getAllRegion } from "@/api/fetchRegion";
import { JobCard, Partners } from "@/components/parts";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Job } from "@/types";
import { useState } from "react";
import Filter from "@/components/parts/filters/filter.tsx";
// import { toast } from "sonner";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const usersPerPage = 1;

  return (
    <div className="flex flex-col gap-y-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Jobs</h1>
          <div className="flex items-center py-4 justify-between">
            <div className="flex flex-row justify-center items-center gap-x-6"></div>
            <Input
              placeholder="Enter name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="grid grid-cols-6 gap-x-4">
            <Filter
              setJobs={setJobs}
              pageNumber={currentPage}
              pageSize={usersPerPage}
              setCurrentPage={setCurrentPage}
              setCount={setCount} />
            <div className="flex flex-col col-span-5">
              <div className="grid grid-cols-3 gap-3 w-full">
                {jobs
                  // ?.filter((user) =>
                  //   user.title
                  //     ?.toLowerCase()
                  //     // .includes(searchTerm.toLowerCase())
                  //     .replace(/\s+/g, "")
                  //     .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
                  // )
                  .map((job) => (
                    <JobCard job={job} key={job.id} />
                  ))}
              </div>
              <div className="flex items-center py-4 justify-end">
                {count > usersPerPage && (
                  <CustomPagination
                    totalPosts={count}
                    postsPerPage={usersPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Jobs;
