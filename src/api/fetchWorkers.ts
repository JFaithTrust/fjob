import { Workers } from "@/types";
import axios from "./axios";

export const getAllWorkers =async (): Promise<Workers[]> => {
    const { data } = await axios.get("/api/Worker/GetAll");
    return data;
}

// get worker by id
export const getWorkerById = async (id: string): Promise<Workers> => {
    const { data } = await axios.get(`/api/Worker/GetById/${id}`);
    return data;
}

// get workers by category id
export const getWorkesByCategoryId = async (id: string): Promise<Workers[]> => {
    const { data } = await axios.get(`/api/Worker/GetAll?jobCategoryId=${id}`);
    return data;
}

// get experience by worker id
export const getExperienceByWorkerId = async (id: string) => {
    const { data } = await axios.get(`/api/Worker/GetExperiencesByUserId/${id}`);
    return data;
}