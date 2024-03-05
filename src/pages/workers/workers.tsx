import { getAllWorkers } from "@/api/fetchWorkers";
import { Partners, WorkerCard } from "@/components/parts";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Workers } from "@/types";
import { useState, useEffect } from "react";

const Workers = () => {
  const [workers, setWorkers] = useState<Workers[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 2;
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
    getAllWorkers().then((data) => setWorkers(data));
  }, []);

  // useEffect(() => {
  //   getAllJobsByQueryParams(currentPage).then((data) => setJobs(data));
  // }, [currentPage])
  
  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Workers</h1>
          <div className="flex items-center py-4 justify-end">
            <Input
              placeholder="Enter name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-3 w-full">
              {workers
                ?.filter((user) =>
                  user.title
                    ?.toLowerCase()
                    // .includes(searchTerm.toLowerCase())
                    .replace(/\s+/g, "")
                    .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
                )
                .map((w) => (
                  <WorkerCard worker={w} key={w.id} />
                ))}
            </div>
            <div className="flex items-center py-4 justify-end">
              {workers.length > usersPerPage && (
                <CustomPagination
                  totalPosts={workers.length}
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

export default Workers;
