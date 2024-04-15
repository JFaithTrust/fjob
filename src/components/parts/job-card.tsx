import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "../ui/button";
import {Badge} from "../ui/badge";
import {Job} from "@/types";
import {useNavigate} from "react-router-dom";
import {jobIcon} from "@/assets";

interface Jobs {
  job: Job;
}

const JobCard = ({job}: Jobs) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]">
      <div className="flex flex-col gap-y-4 p-6">
        <div className="flex flex-row font-roboto gap-x-2 items-center">
          <Avatar>
            <AvatarImage src={jobIcon} alt={job.title}/>
            <AvatarFallback>{job.title.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none text-darkindigo">
              {job.title}
            </span>
          </div>
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <div className="flex items-center font-bold">
            <span className="text-darkindigo">{job.salary} so'm</span>{" "}
            <span className="text-orange-400">/Oy</span>
          </div>
          <div>
              <span className="text-base leading-none font-normal text-gray-600">
                                  {job.regionName} {job.districtName}
                                </span>
          </div>
          <div>
                        <span className="text-base leading-none font-normal text-gray-600">
                            {job.minAge} - {job.maxAge} yosh
                        </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2">
            <Badge className="px-5">{job.gender}</Badge>
            <Badge className="px-5">{job.categoryName}</Badge>
          </div>
          <Button
            className="px-4 py-1.5 rounded-xl text-sm font-semibold"
            onClick={() => navigate(`/jobs/job-detail/${job.id}`)}
          >
            Ko'rish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
