import {Worker} from "@/types";
import axios from "./axios";

// get worker by id
export const getWorkerById = async (id: string): Promise<Worker> => {
  const {data} = await axios.get(`/api/Worker/GetById/${id}`);
  return data;
}

// get workers by category id
export const getWorkersByCategoryId = async (id: string): Promise<Worker[]> => {
  const {data} = await axios.get(`/api/Worker/GetAll?jobCategoryId=${id}`);
  return data;
}

// get experience by worker id
export const getExperienceByUserId = async (id: string) => {
  const {data} = await axios.get(`/api/Experience/GetByUserId/${id}`);
  return data;
}

export const getCountFilteredWorkers = async (params: Map<string, string>): Promise<number> => {
  const {data} = await axios.get(`/api/Worker/GetCountForFilter?${getQuery(params)}`);
  return data;
}
export const getAllWorkersFiltered = async (params: Map<string, string>) => {
  const {data} = await axios.get(`/api/Worker/GetAll?${getQuery(params)}`)
  return data;
}

const getQuery = (params: Map<string, string>): string => {
  return [...params.entries()]
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}