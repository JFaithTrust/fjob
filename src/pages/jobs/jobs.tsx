import { getAllCategory } from "@/api/fetchCategory";
import { getDistrictByRegionId } from "@/api/fetchDistrict";
import {
  getCountOfAllJobs,
  getJobByCatergoryId,
  getJobsByDistrictId,
  getJobsByGender,
  // getJobsByMaxAndMinAge,
  // getJobsByMaxAndMinSalary,
  getJobsByPagination,
  getJobsByRegionId,
} from "@/api/fetchJobs";
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
import { toast } from "sonner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  const [count, setCount] = useState(0);
  // max and min salary states
  // const [minSalary, setMinSalary] = useState(0);
  // const [maxSalary, setMaxSalary] = useState(0);
  // min and max age states
  // const [minAge, setMinAge] = useState(0);
  // const [maxAge, setMaxAge] = useState(0);
  // gender state
  const [currentGender, setCunrrentGender] = useState("Tanlanmagan");

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
    if (valuec) {
      const selectedCategoryId =
        allCategory.find(
          (category) => category.title.toLocaleLowerCase() === valuec
        )?.id || "";
      getJobByCatergoryId(selectedCategoryId, currentPage, usersPerPage).then(
        (jobs) => setJobs(jobs)
      );
    } else {
      getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
        setJobs(jobs)
      );
    }
  }, [valuec]);

  useEffect(() => {
    if (valuer) {
      const selectedRegionId =
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || "";
      getJobsByRegionId(selectedRegionId, currentPage, usersPerPage)
        .then((jobs) => setJobs(jobs))
        .catch((err) => {
          return toast.error(err);
        });
      getDistrictByRegionId(
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || ""
      ).then((districts) => setDistrict(districts));
    } else {
      getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
        setJobs(jobs)
      );
    }
  }, [valuer]);

  useEffect(() => {
    if (valued) {
      const selectedDistrictId =
        district.find((d) => d.name.toLocaleLowerCase() === valued)?.id || "";
      getJobsByDistrictId(selectedDistrictId, currentPage, usersPerPage).then(
        (jobs) => setJobs(jobs)
      );
    } else {
      const selectedRegionId =
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || "";
      getJobsByRegionId(selectedRegionId, currentPage, usersPerPage)
        .then((jobs) => setJobs(jobs))
        .catch((err) => {
          return toast.error(err);
        });
    }
  }, [valued]);

  // submit min and max salary
  // const handleSubmitMinMaxSalary = () => {
  //   if (minSalary > maxSalary) {
  //     toast.error("Maosh chegarasi noto'g'ri kiritildi!");
  //     return;
  //   }
  //   getJobsByMaxAndMinSalary(
  //     minSalary,
  //     maxSalary,
  //     currentPage,
  //     usersPerPage
  //   ).then((data) => setJobs(data));
  // };

  // submit min and max age
  // const handleSubmitMinMaxAge = () => {
  //   if (minAge > maxAge) {
  //     toast.error("Yosh chegarasi noto'g'ri kiritildi!");
  //     return;
  //   }
  //   getJobsByMaxAndMinAge(minAge, maxAge, currentPage, usersPerPage).then(
  //     (data) => setJobs(data)
  //   );
  // };

  // submit by gender
  const handleSubmitGender = (gender: string) => {
    if (gender === currentGender) {
      setCunrrentGender("Tanlanmagan");
      return getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
        setJobs(jobs)
      );
    }
    if (gender === "Erkak") {
      setCunrrentGender("Erkak");
      getJobsByGender("Erkak", currentPage, usersPerPage).then((data) =>
        setJobs(data)
      );
    } else {
      setCunrrentGender("Ayol");
      getJobsByGender("Ayol", currentPage, usersPerPage).then((data) =>
        setJobs(data)
      );
    }
  };

  // reset
  // const handleReset = () => {
  //   getJobsByPagination(currentPage, usersPerPage).then((jobs) =>
  //     setJobs(jobs)
  //   );
  // };

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
              {/* Salary */}
              <div>
                <Label className="text-base font-normal text-darkindigo">
                  Summa
                </Label>
                <div className="grid grid-cols-3 gap-x-2">
                  <div className="flex flex-col gap-y-2 col-span-2">
                    <Input
                      placeholder="Min"
                      type="number"
                      // onChange={(e) => setMinSalary(parseInt(e.target.value))}
                    />
                    <Input
                      placeholder="Max"
                      type="number"
                      // onChange={(e) => setMaxSalary(parseInt(e.target.value))}
                    />
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
                    <Input
                      placeholder="Min"
                      type="number"
                      // onChange={(e) => setMinAge(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      placeholder="Max"
                      type="number"
                      // onChange={(e) => setMaxAge(parseInt(e.target.value))}
                    />
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
