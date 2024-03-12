import { Worker } from "@/types";
import { WorkerCard} from "./parts";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getWorkersByPagination } from "@/api/fetchWorkers";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";

const Workers = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    getWorkersByPagination(1, 4).then((data) => setWorkers(data));
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto sm:text-5xl text-4xl font-semibold">
          <span className="text-darkblue">Top</span> Workers
        </h1>
        <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            className="w-full"
        >
          <CarouselContent>
            {workers.map((worker, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <WorkerCard worker={worker} key={worker.id}/>
                  </div>
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="sm:px-5 px-2 sm:py-3 py-1 font-roboto sm:text-lg text-base rounded-xl"
          >
            See More...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Workers;
