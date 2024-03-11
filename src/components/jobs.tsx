import {Job} from "@/types";
import {JobCard} from "./parts";
import {Button} from "./ui/button";
import {useEffect, useState} from "react";
import {getJobsByPagination} from "@/api/fetchJobs";
import {useNavigate} from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";
const Jobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getJobsByPagination(1, 4).then((data) => setJobs(data));
    }, []);
    return (
        <div className="bg-lightblue">
            <div className="container py-8 flex flex-col gap-y-8">
                <h1 className="text-center font-roboto text-5xl font-semibold">
                    <span className="text-darkblue">Top</span> Jobs
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
                        {jobs.map((job, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <JobCard job={job} key={job.id}/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
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
