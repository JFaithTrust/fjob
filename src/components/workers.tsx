import { Workers } from "@/types";
import { WorkerCard } from "./parts";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getAllWorkers } from "@/api/fetchWorkers";

const Workers = () => {
  const [workers, setWorkers] = useState<Workers[]>([]);

  useEffect(() => {
    getAllWorkers().then((data) => setWorkers(data));
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="max-w-8xl mx-auto py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-5xl font-semibold">
          <span className="text-darkblue">Top</span> Workers
        </h1>
        <div className="grid grid-cols-4 gap-3">
          {workers.slice(0, 3).map((w) => (
            <WorkerCard worker={w} key={w.id} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="px-5 py-3 font-roboto text-lg rounded-xl"
          >
            See More...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Workers;
