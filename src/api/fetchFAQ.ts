import axios from "@/api/axios.ts";
import { FAQ } from "@/types";


export const getAllFAQs = async (): Promise<FAQ[]> => {
  const { data } = await axios.get("/api/FAQ/GetAll");
  return data;
}