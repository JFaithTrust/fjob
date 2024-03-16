import { Job } from "@/types";
import axios from "./axios";

// export const getAllJobs =async (): Promise<Jobs[]> => {
//     const { data } = await axios.get("/api/Job/GetAll");
//     return data;
// }

export const getJobById = async (id: string): Promise<Job> => {
  const { data } = await axios.get(`/api/Job/GetById/${id}`);
  return data;
};

export const getTopJobs = async (): Promise<Job[]> => {
  const { data } = await axios.get("/api/Job/GetTopJobs");
  return data;
}

// get count of all jobs
export const getCountFilteredJobs = async (params: Map<string, string>): Promise<number> => {
  const { data } = await axios.get(`/api/Job/GetCountForFilter?${getQuery(params)}`);
  return data;
};

// get count of all jobs for categories
export const getCountJobsForCategory = async (id: string): Promise<number> => {
  const { data } = await axios.get(`/api/Job/GetCountForFilter?jobCategoryId=${id}`);
  return data;
}

export const getAllJobsFiltered = async (params: Map<string, string>) => {
  const { data } = await axios.get(`/api/Job/GetAll?${getQuery(params)}`)
  return data;
}
export const getJobByCategoryId = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<Job[]> => {
  const { data } = await axios.get(
    `/api/Job/GetAll?jobCategoryId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

const getQuery = (params: Map<string, string>): string => {
  return [...params.entries()]
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
