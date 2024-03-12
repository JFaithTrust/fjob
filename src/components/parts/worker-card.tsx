import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "../ui/button";
import {Badge} from "../ui/badge";
import {Category, District, Region, Worker} from "@/types";
import {useEffect, useState} from "react";
import {getCategoryById} from "@/api/fetchCategory";
import {getDistrictById} from "@/api/fetchDistrict";
import {getRegionByDistrictId} from "@/api/fetchRegion";
import {useNavigate} from "react-router-dom";
import {SkeletonCard} from "@/components/ui/custom-skeleton.tsx";
import {calculateAge} from "@/lib/utils.ts";

interface Workers {
    worker: Worker;
}

const WorkerCard = ({worker}: Workers) => {
    const [category, setCategory] = useState<Category>();
    const [district, setDistrict] = useState<District>();
    const [region, setRegion] = useState<Region>();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        const getPartOfJobs = async () => {
            const category = await getCategoryById(worker.categoryId);
            setCategory(category);
            const district = await getDistrictById(worker.districtId);
            setDistrict(district);
            const region = await getRegionByDistrictId(district.id);
            setRegion(region);
            setLoading(false)
        };
        getPartOfJobs();
    }, [worker]);

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]">
            {loading ? (<SkeletonCard/>) : (<div className="flex flex-col gap-y-4 p-6">
                <div className="flex flex-row font-roboto gap-x-2 items-center">
                    <Avatar>
                        <AvatarImage src="/src/assets/worker.svg" alt={worker.title}/>
                        <AvatarFallback>{worker.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none text-darkindigo">
              {worker.title}
            </span>
                    </div>
                </div>
                <div className={'flex flex-col gap-y-1'}>
                    <div className="flex items-center font-bold">
                        <span className="text-darkindigo">{worker.salary} so'm</span>{" "}
                        <span className="text-orange-400">/Oy</span>
                    </div>
                    <div>
                        {district && region && (
                            <span className="text-base leading-none font-normal text-gray-600">
                                  {region.name} {district.name}
                                </span>
                        )}
                    </div>
                    <div>
                        <span className="text-base leading-none font-normal text-gray-600">
                             {calculateAge(worker.birthDate)} yosh
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-x-2">
                        <Badge className="px-5">{worker.gender}</Badge>
                        {category && <Badge className="px-5">{category.title}</Badge>}
                    </div>
                    <Button className="px-4 py-1.5 rounded-xl text-sm font-semibold"
                            onClick={() => navigate(`/worker-detail/${worker.id}`)}>
                        Ko'rish
                    </Button>
                </div>
            </div>)}
        </div>
    );
};

export default WorkerCard;
