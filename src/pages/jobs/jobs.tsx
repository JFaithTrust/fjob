// import { getDistrictByRegionId } from "@/api/fetchDistrict";
import { getCountOfAllJobs, getJobsByPagination, } from "@/api/fetchJobs";
// import { getAllRegion } from "@/api/fetchRegion";
import { JobCard, Partners } from "@/components/parts";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Jobs } from "@/types";
import { useEffect, useState } from "react";
// import { toast } from "sonner";

const Jobs = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // part states of jobs
  // const [allCategory, setAllCategory] = useState<Category[]>([]);
  // const [regions, setRegions] = useState<Region[]>([]);
  // const [district, setDistrict] = useState<District[]>([]);
  // combobox states
  const [count, setCount] = useState(0);
  // max and min salary states
  // const [minSalary, setMinSalary] = useState(0);
  // const [maxSalary, setMaxSalary] = useState(0);
  // min and max age states
  // const [minAge, setMinAge] = useState(0);
  // const [maxAge, setMaxAge] = useState(0);
  // gender state

  const usersPerPage = 9;
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
    getCountOfAllJobs().then((count) => setCount(count));
  }, []);

  useEffect(() => {
    getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
      setJobs(jobs)
    );
    // getAllCategory().then((categories) => setAllCategory(categories));
    // getAllRegion().then((regions) => setRegions(regions));
  }, [currentPage]);

  // useEffect(() => {
  //   if (valuec) {
  //     const selectedCategoryId =
  //       allCategory.find(
  //         (category) => category.title.toLocaleLowerCase() === valuec
  //       )?.id || "";
  //     getJobByCatergoryId(selectedCategoryId, currentPage, usersPerPage).then(
  //       (jobs) => setJobs(jobs)
  //     );
  //   } else {
  //     getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
  //       setJobs(jobs)
  //     );
  //   }
  // }, [valuec]);
  //
  // useEffect(() => {
  //   if (valuer) {
  //     const selectedRegionId =
  //       regions.find((region) => region.name.toLocaleLowerCase() === valuer)
  //         ?.id || "";
  //     getJobsByRegionId(selectedRegionId, currentPage, usersPerPage)
  //       .then((jobs) => setJobs(jobs))
  //       .catch((err) => {
  //         return toast.error(err);
  //       });
  //     getDistrictByRegionId(
  //       regions.find((region) => region.name.toLocaleLowerCase() === valuer)
  //         ?.id || ""
  //     ).then((districts) => setDistrict(districts));
  //   } else {
  //     getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
  //       setJobs(jobs)
  //     );
  //   }
  // }, [valuer]);
  //
  // useEffect(() => {
  //   if (valued) {
  //     const selectedDistrictId =
  //       district.find((d) => d.name.toLocaleLowerCase() === valued)?.id || "";
  //     getJobsByDistrictId(selectedDistrictId, currentPage, usersPerPage).then(
  //       (jobs) => setJobs(jobs)
  //     );
  //   } else {
  //     const selectedRegionId =
  //       regions.find((region) => region.name.toLocaleLowerCase() === valuer)
  //         ?.id || "";
  //     getJobsByRegionId(selectedRegionId, currentPage, usersPerPage)
  //       .then((jobs) => setJobs(jobs))
  //       .catch((err) => {
  //         return toast.error(err);
  //       });
  //   }
  // }, [valued]);

  // submit min and max salary
  // const handleSubmitMinMaxSalary = () => {
  //   if (minSalary > maxSalary) {
  //     toast.error("Maosh chegarasi noto'g'ri kiritildi!");
  //     return;
  //   }
  //   getJobsByMaxAndMinSalary(
  //     minSalary,
  //     maxSalary,
  //     currentPage,
  //     usersPerPage
  //   ).then((data) => setJobs(data));
  // };

  // submit min and max age
  // const handleSubmitMinMaxAge = () => {
  //   if (minAge > maxAge) {
  //     toast.error("Yosh chegarasi noto'g'ri kiritildi!");
  //     return;
  //   }
  //   getJobsByMaxAndMinAge(minAge, maxAge, currentPage, usersPerPage).then(
  //     (data) => setJobs(data)
  //   );
  // };

  // submit by gender


  // reset
  // const handleReset = () => {
  //   getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
  //     setJobs(jobs)
  //   );
  // };

  return (
    <div className="flex flex-col gap-y-8 mt-8">
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
