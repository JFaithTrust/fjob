import { Region } from "@/types";
import axios from "./axios";

export const getRegionByDistrictId = async (id: string) : Promise<Region> => {
  const { data } = await axios.get(`/api/Region/GetRegionByDistrictId/${id}`);
  return data;
};
