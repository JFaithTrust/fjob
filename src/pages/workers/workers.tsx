import { getCountOfAllWorkers } from "@/api/fetchWorkers";
import { Partners, WorkerCard } from "@/components/parts";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Worker } from "@/types";
import { useEffect, useState } from "react";
import Filter from "@/components/parts/filters/filter.tsx";

const Workers = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0)
  const usersPerPage = 1;

  useEffect(() => {
    getCountOfAllWorkers().then(count => setCount(count));
  }, []);

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Workers</h1>
          <div className="flex items-center py-4 justify-end"> {/* Search bar */}
            <Input
              placeholder="Enter name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="grid grid-cols-6 gap-x-4">
            <Filter
              setWorkers={setWorkers}
              pageNumber={currentPage}
              pageSize={usersPerPage} />
            <div className={`flex flex-col col-span-5`}>
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
      <Partners />
    </div>
  );
};

export default Workers;
