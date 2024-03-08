import { Jobs } from "@/types";
import axios from "./axios";

// export const getAllJobs =async (): Promise<Jobs[]> => {
//     const { data } = await axios.get("/api/Job/GetAll");
//     return data;
// }

export const getJobById = async (id: string): Promise<Jobs> => {
  const { data } = await axios.get(`/api/Job/GetById/${id}`);
  return data;
};

// get all jobs by pagination params
export const getJobsByPagination = async (
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// get count of all jobs
export const getCountOfAllJobs = async (): Promise<number> => {
  const { data } = await axios.get("/api/Job/GetCount");
  return data;
};

// get jobs by max and min salary and pagination params
export const getJobsByMaxAndMinSalary = async (
  minSalary: number,
  maxSalary: number,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?minSalary=${minSalary}&maxSalary=${maxSalary}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// get jobs by max and min age and pagination params
export const getJobsByMaxAndMinAge = async (
  minAge: number,
  maxAge: number,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?minAge=${minAge}&maxAge=${maxAge}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// get jobs by gender and pagination params
export const getJobsByGender = async (
  gender: string,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?gender=${gender}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// getJobByCatergoryId and pagination params
export const getJobByCatergoryId = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?jobCategoryId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// get jobs by region id and pagination params
export const getJobsByRegionId = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?regionId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

// get jobs by region id , district id and pagination params
export const getJobsByDistrictId = async (
  districtId: string,
  pageNumber: number,
  pageSize: number
): Promise<Jobs[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?districtId=${districtId}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};
