import { Category } from "@/types";
import axios from "./axios";

export const getCategoryById = async (id: string) : Promise<Category> => {
  const { data } = await axios.get(`/api/JobCategory/GetById/${id}`);
  return data;
};
