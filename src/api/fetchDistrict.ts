import { District } from "@/types";
import axios from "./axios";

export const getDistrictById = async (id: string) : Promise<District> => {
  const { data } = await axios.get(`/api/District/GetById/${id}`);
  return data;
};
