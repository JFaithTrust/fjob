import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Category, District, Jobs, Region } from "@/types";
import { useEffect, useState } from "react";
import { getCategoryById } from "@/api/fetchCategory";
import { getDistrictById } from "@/api/fetchDistrict";
import { getRegionByDistrictId } from "@/api/fetchRegion";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

interface Job {
  job: Jobs;
}

const JobCard = ({ job }: Job) => {
  const [category, setCategory] = useState<Category>();
  const [district, setDistrict] = useState<District>();
  const [region, setRegion] = useState<Region>();

  const navigate = useNavigate();

  useEffect(() => {
    const getPartOfJobs = async () => {
      const category = await getCategoryById(job.categoryId);
      setCategory(category);
      const district = await getDistrictById(job.districtId);
      setDistrict(district);
      const region = await getRegionByDistrictId(district.id);
      setRegion(region);
    };
    getPartOfJobs();
  }, [job]);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]">
      <div className="p-6 flex flex-col gap-y-4">
        <div className="flex flex-row font-roboto gap-x-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none text-darkindigo">
              {job.title}
            </span>
          </div>
        </div>
        <div className="flex items-center font-bold">
          <span className="text-darkindigo">{job.salary} so'm</span>{" "}
          <span className="text-orange-400">/Oy</span>
        </div>
        <div>
          {district && region && (
            <div className={`flex`}>
              <IoLocationOutline />
              <span className="text-base leading-none font-normal text-gray-600">
                {district.name}, {region.name}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2">
            <Badge className="px-5">{job.gender}</Badge>
            {category && <Badge className="px-5">{category.title}</Badge>}
          </div>
          <Button className="px-4 py-1.5 rounded-xl text-sm font-semibold"
                  onClick={() => navigate(`/job-detail/${job.id}`)}>
            Ko'rish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
