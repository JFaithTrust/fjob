import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import { SetStateAction, useEffect, useState } from "react";
import { Category, District, Job, Region, Worker } from "@/types";
import { getAllWorkersFiltered } from "@/api/fetchWorkers.ts";
import { getAllCategory } from "@/api/fetchCategory.ts";
import { getAllRegion } from "@/api/fetchRegion.ts";
import { getDistrictByRegionId } from "@/api/fetchDistrict.ts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { getAllJobsFiltered } from "@/api/fetchJobs.ts";

interface FilterProps {
  setWorkers?: (workers: SetStateAction<Worker[]>) => void,
  setJobs?: (jobs: SetStateAction<Job[]>) => void,
  pageNumber: number
  pageSize: number
}

const Filter = ({setWorkers, setJobs, pageNumber, pageSize}: FilterProps) => {
  const [openc, setOpenc] = useState(false);
  const [valuec, setValuec] = useState("");
  const [openr, setOpenr] = useState(false);
  const [opend, setOpend] = useState(false);
  const [valued, setValued] = useState("");
  const [allCategory, setAllCategory] = useState<Category[]>([]);
  const [district, setDistrict] = useState<District[]>([]);
  const [valuer, setValuer] = useState("");
  // const [count, setCount] = useState(0)
  const [regions, setRegions] = useState<Region[]>([]);
  const [params, setParams] = useState(new Map<string, string>())
  const [currentGender, setCurrentGender] = useState("")





  useEffect(() => {
    getAllCategory().then((categories) => setAllCategory(categories));
    getAllRegion().then((regions) => setRegions(regions));
  }, []);

  useEffect(() => {
    if (valuer) {
      getDistrictByRegionId(
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || ""
      ).then((districts) => setDistrict(districts));
    }
  }, [valuer]);

  useEffect(() => {
    if (setJobs){
      getAllJobsFiltered(params)
        .then((jobs) => {
          setJobs(jobs)
        })
    }
    if (setWorkers){
      getAllWorkersFiltered(params)
        .then((workers) => {
          setWorkers(workers)
        })
    }
  }, [params]);
  useEffect(() => {
    putParams("pageNumber", pageNumber.toString())
  }, [pageNumber]);

  function putParams(key: string, value: string) {
    if (!params.has("pageSize")){
      params.set("pageSize", pageSize.toString())
    }
    const newMap: Map<string, string> = new Map(params);
    if (value.length > 0) {
      newMap.set(key, value);
    } else {
      if (params.has(key)) {
        newMap.delete(key);
      }
    }
    setParams(newMap)
  }
  const handleSubmitGender = (gender: string) => {
    if (gender === currentGender) {
      putParams("gender", "")
    }else {
      putParams("gender", gender)
    }
    setCurrentGender(gender)
  };

  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      {/* Salary */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Summa
        </Label>
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex flex-col gap-y-2 col-span-2">
            <Input placeholder="Min"
                   onChange={
                     event => putParams("minSalary", event.target.value)
                   } />
            <Input placeholder="Max"
                   onChange={
                     event => putParams("maxSalary", event.target.value)
                   } />
          </div>
        </div>
      </div>
      {/* Age */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Yosh chegarasi
        </Label>
        <div className="grid grid-cols-3 gap-x-2 content-center">
          <div className="col-span-1">
            <Input placeholder="Min"
                   onChange={
                     event => putParams("minAge", event.target.value)
                   } />
          </div>
          <div className="col-span-1">
            <Input placeholder="Max"
                   onChange={
                     event => putParams("maxAge", event.target.value)
                   } />
          </div>
        </div>
      </div>
      {/* Gender */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Jins
        </Label>
        <div className="grid grid-cols-2 gap-x-2">
          <ToggleGroup type="single">
            <ToggleGroupItem
              value="bold"
              aria-label="Toggle bold"
              className="col-span-1 px-3 py-1 rounded-xl"
              variant={"outline"}
              onClick={() => handleSubmitGender("Erkak")}
            >
              Erkak
            </ToggleGroupItem>
            <ToggleGroupItem
              value="italic"
              aria-label="Toggle italic"
              className="col-span-1 px-3 py-1 rounded-xl"
              variant={"outline"}
              onClick={() => handleSubmitGender("Ayol")}
            >
              Ayol
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      {/* Category Combobox */}
      <div>
        <Popover open={openc} onOpenChange={setOpenc}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openc}
              className="w-[200px] justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
              {valuec
                ? allCategory.find(
                  (category) =>
                    category.title.toLocaleLowerCase() === valuec
                )?.title
                : "Kategoriya tanlang..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {allCategory.map((category) => (
                  <CommandItem
                    key={category.id}
                    value={category.title}
                    onSelect={(currentValue) => {
                      setValuec(
                        currentValue === valuec ? "" : currentValue
                      );
                      setOpenc(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valuec === category.title.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {category.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* Region Combobox */}
      <div>
        <Popover open={openr} onOpenChange={setOpenr}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openr}
              className="w-[200px] justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
                      <span className="truncate">
                        {valuer
                          ? regions.find(
                            (region) =>
                              region.name.toLocaleLowerCase() === valuer
                          )?.name
                          : "Viloyat tanlang..."}
                      </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {regions.map((region) => (
                  <CommandItem
                    key={region.id}
                    value={region.name}
                    onSelect={(currentValue) => {
                      setValuer(
                        currentValue === valuer ? "" : currentValue
                      );
                      setOpenr(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valuer === region.name.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {region.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* District Combobox */}
      <div>
        <Popover open={opend} onOpenChange={setOpend}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={opend}
              disabled={!valuer}
              className="w-[200px] justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
              {valued
                ? district.find(
                (d) => d.name.toLocaleLowerCase() === valued
              )?.name || "Tuman tanlang..."
                : "Tuman tanlang..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {district.map((d) => (
                  <CommandItem
                    key={d.id}
                    value={d.name}
                    onSelect={(currentValue) => {
                      setValued(
                        currentValue === valued ? "" : currentValue
                      );
                      setOpend(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valued === d.name.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {d.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Filter