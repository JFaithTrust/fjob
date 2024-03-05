// export const getAllApplications = async (): Promise<ApplicationType[]> => {
//     const access_token = localStorage.getItem("access_token");
//     const { data } = await axios.get("/api/application/all", {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     });
//     return data;
//   };

import { Jobs } from "@/types";
import axios from "./axios";

export const getAllJobs =async (): Promise<Jobs[]> => {
    const { data } = await axios.get("/api/Job/GetAll");
    return data;
}

export const getAllJobsByQueryParams = async (pageNumber: number): Promise<Jobs[]> => {
    const { data } = await axios.get(`/api/Job/GetAll?pageNumber=${pageNumber}&pageSize=1`);
    return data;
}

export const getJobById = async (id: string): Promise<Jobs> => {
    const { data } = await axios.get(`/api/Job/GetById/${id}`);
    return data;
}

// getJobByCatergoryId
export const getJobByCatergoryId = async (id: string): Promise<Jobs[]> => {
    const { data } = await axios.get(`/api/Job/GetAll?jobCategoryId=${id}`);
    return data;
}