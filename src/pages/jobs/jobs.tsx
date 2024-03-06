import { getAllCategory } from "@/api/fetchCategory";
import { getDistrictByRegionId } from "@/api/fetchDistrict";
import { getCountOfAllJobs, getJobsByPagination } from "@/api/fetchJobs";
import { getAllRegion } from "@/api/fetchRegion";
import { JobCard, Partners } from "@/components/parts";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import CustomPagination from "@/components/ui/custom-pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Category, District, Jobs, Region } from "@/types";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState, useEffect } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // part states of jobs
  const [allCategory, setAllCategory] = useState<Category[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [district, setDistrict] = useState<District[]>([]);
  // combobox states
  const [openc, setOpenc] = useState(false);
  const [valuec, setValuec] = useState("");
  const [openr, setOpenr] = useState(false);
  const [valuer, setValuer] = useState("");
  const [opend, setOpend] = useState(false);
  const [valued, setValued] = useState("");
  const [count, setCount] = useState(0)
  
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
    getAllCategory().then((categories) => setAllCategory(categories));
    getAllRegion().then((regions) => setRegions(regions));
  }, [currentPage]);

  useEffect(() => {
    if (valuer) {
      getDistrictByRegionId(
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || ""
      ).then((districts) => setDistrict(districts));
    }
  }, [valuer]);

  useEffect(() => {
    console.log(valuec);
  }, [valuec]);

  // useEffect(() => {
  //   getAllJobsByQueryParams(currentPage).then((data) => setJobs(data));
  // }, [currentPage])

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
            <div className="col-span-1 flex flex-col gap-y-4">
              {/* Cost */}
              <div>
                <Label className="text-base font-normal text-darkindigo">
                  Summa
                </Label>
                <div className="grid grid-cols-3 gap-x-2">
                  <div className="flex flex-col gap-y-2 col-span-2">
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                  </div>
                  <div className="h-full col-span-1 flex items-end">
                    <Button className="h-fit items-end px-3 py-1 rounded-2xl">
                      Go
                    </Button>
                  </div>
                </div>
              </div>
              {/* Salary */}
              <div>
                <Label className="text-base font-normal text-darkindigo">
                  Yosh chegarasi
                </Label>
                <div className="grid grid-cols-3 gap-x-2 content-center">
                  <div className="col-span-1">
                    <Input placeholder="Min" />
                  </div>
                  <div className="col-span-1">
                    <Input placeholder="Max" />
                  </div>
                  <div className="h-full col-span-1 flex items-end">
                    <Button className="h-fit items-end px-3 py-1 rounded-2xl">
                      Go
                    </Button>
                  </div>
                </div>
              </div>
              {/* Gender */}
              <div>
                <Label className="text-base font-normal text-darkindigo">
                  Jins
                </Label>
                <div className="grid grid-cols-2 gap-x-2">
                  <div className="col-span-1">
                    <Button
                      variant={"active-outline"}
                      className="items-end px-3 py-1 rounded-xl"
                    >
                      Erkak
                    </Button>
                  </div>
                  <div className="col-span-1">
                    <Button
                      variant={"active-outline"}
                      className="items-end px-3 py-1 rounded-xl"
                    >
                      Ayol
                    </Button>
                  </div>
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
